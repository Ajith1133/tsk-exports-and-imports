// This is a Server Component - NO "use client" here
import { riceProducts } from "../productsData";
import ProductClient from "./ProductClient";

// Generate static paths for all products at build time
export async function generateStaticParams() {
  return riceProducts.map((product) => ({
    product: encodeURIComponent(product.name),
  }));
}

interface PageProps {
  params: Promise<{
    product: string;
  }>;
}

export default async function ProductDetail({ params }: PageProps) {
  // Await the params Promise
  const { product: productParam } = await params;
  
  // Decode the URL parameter
  const decodedName = decodeURIComponent(productParam);

  // Pass the product name to the client component
  return <ProductClient productName={decodedName} />;
}