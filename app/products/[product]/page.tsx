import { notFound } from "next/navigation";
import { riceProducts } from "../productsData";
import Link from "next/link";

// This is required for static export or build time
export async function generateStaticParams() {
  return riceProducts.map((p) => ({
    product: encodeURIComponent(p.name)
  }));
}

interface PageProps {
  params: Promise<{
    product: string;
  }>;
}

export default async function ProductDetail({ params }: PageProps) {
  // ✅ CORRECT: await the params Promise first
  const { product: productParam } = await params;

  // Then decode the URL parameter
  const decodedName = decodeURIComponent(productParam);
  console.log("Looking for product:", decodedName); // Debug log

  // Find the product
  const product = riceProducts.find((p) => p.name === decodedName);

  console.log("Found product:", product); // Debug log

  if (!product) {
    return notFound();
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>

      <Link
        href="/products"
        style={{
          display: 'inline-block',
          marginBottom: '2rem',
          textDecoration: 'none',
          borderBottom: 'none',
        }}
      >
        <button
          style={{
            background: "#F4CB4D",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            transition: "all 0.3s ease",
          }}
        >
          ❮
        </button>
      </Link>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px' }}
          />
        </div>

        <div style={{ flex: '2', minWidth: '300px' }}>
          <h1 style={{ marginBottom: '1rem', marginTop: '0', fontSize: '2rem', color: '#1E2D3B' }}>{product.name}</h1>

          <div style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '16px', whiteSpace: 'pre-wrap', color: '#334155' }}>
            {product.fullDesc || product.desc}
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f1f5f9', borderRadius: '8px', color: '#1E2D3B' }}>
            <h3>Send an Enquiry</h3>
            <p>For more details and pricing, please email us at:</p>
            <a href="mailto:enquiry@tskexportsandimports.com" style={{
              color: '#1565c0', 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
              textDecoration: 'none',
              borderBottom: 'none',
            }}>
              enquiry@tskexportsandimports.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}