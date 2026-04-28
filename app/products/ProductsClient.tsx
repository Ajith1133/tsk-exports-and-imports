"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { riceProducts } from "./productsData";
import Products from "./products";


export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productSlug = searchParams.get("product");
  const product = riceProducts.find((p) => p.slug === productSlug);

  // ✅ DETAIL VIEW
  if (product) {
    return (
      <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {/* BACK BUTTON */}
        <button
          onClick={() => router.push("/products")}
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
            marginBottom: "2rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e0b82b")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#F4CB4D")}
        >
          ❮
        </button>

        {/* Product Content */}
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            />
          </div>

          <div style={{ flex: "2", minWidth: "300px" }}>
            <h1 style={{
              marginBottom: "1rem",
              marginTop: "0",
              fontSize: "2rem",
              color: "#1E2D3B"
            }}>
              {product.name}
            </h1>

            <div style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              marginTop: "16px",
              whiteSpace: "pre-wrap",
              color: "#334155"
            }}>
              {product.fullDesc || product.desc}
            </div>

            {/* Enquiry Section */}
            <div style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background: "#f1f5f9",
              borderRadius: "8px",
              color: "#1E2D3B"
            }}>
              <h3 style={{ marginTop: 0 }}>Send an Enquiry</h3>
              <p>For more details and pricing, please email us at:</p>
              <a
                href={`mailto:enquiry@tskexportsandimports.com?subject=Enquiry about ${encodeURIComponent(product.name)}`}
                style={{
                  color: "#F4CB4D",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  backgroundColor: "#1E2D3B",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F4CB4D";
                  e.currentTarget.style.color = "#1E2D3B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1E2D3B";
                  e.currentTarget.style.color = "#F4CB4D";
                }}
              >
                enquiry@tskexportsandimports.com
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ✅ LIST VIEW (Products Carousel)
  return <Products />;
}