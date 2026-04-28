import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

// Loading fallback component with inline styles (no styled-jsx)
function ProductsLoadingFallback() {
  return (
    <div style={{ 
      padding: "4rem 2rem", 
      textAlign: "center",
      color: "#1E2D3B"
    }}>
      <div style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        Loading products...
      </div>
      <div style={{ 
        width: "50px", 
        height: "50px", 
        border: "3px solid #f3f3f3", 
        borderTop: "3px solid #F4CB4D", 
        borderRadius: "50%", 
        margin: "0 auto",
        animation: "spin 1s linear infinite"
      }} />
      
      {/* Add keyframes animation using a style tag - only this is allowed */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoadingFallback />}>
      <ProductsClient />
    </Suspense>
  );
}