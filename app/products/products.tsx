"use client";

import { useState, useEffect, useRef } from "react";
import { riceProducts } from "./productsData";
import { useGetBreakpoints } from "../hooks/useGetBreakpoints";
import { useRouter } from "next/navigation";

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProducts = riceProducts.length;
  const { isMobile } = useGetBreakpoints();
  const visibleItems = isMobile ? 1 : 3;
  const autoScrollIntervalRef = useRef<any>(null);
  const router = useRouter();

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + visibleItems < totalProducts;

  // ✅ USE SLUG IN URL
  const handleProductClick = (slug: string) => {
    router.push(`/products?product=${slug}`);
  };

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
      resetAutoScroll();
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
      resetAutoScroll();
    }
  };

  const autoScroll = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const resetAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(autoScroll, 5000);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => clearInterval(autoScrollIntervalRef.current);
  }, [currentIndex, isMobile]);

  const visibleProducts = riceProducts.slice(
    currentIndex,
    currentIndex + visibleItems
  );

  return (
    <section style={{ padding: isMobile ? "2rem 1rem" : "4rem 1rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>

        {/* HEADER */}
        <div style={{ textAlign: isMobile ? "center" : "left", marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: isMobile ? "1.75rem" : "3rem", 
            marginBottom: "0.5rem", 
            color: "#1E2D3B" 
          }}>
            Our Products
          </h2>
          <h4 style={{ 
            color: "#4a5568", 
            fontWeight: "normal", 
            fontSize: isMobile ? "0.9rem" : "1rem" 
          }}>
            Click on any of the below product to view more details and send an enquiry. You can also email us on enquiry@tskexportsandimports.com to get more details.
          </h4>
        </div>

        {/* Left Arrow Button */}
        {canScrollLeft && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: isMobile ? "-10px" : "-20px",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}>
            <button
              onClick={scrollLeft}
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: isMobile ? "32px" : "40px",
                height: isMobile ? "32px" : "40px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "16px" : "20px",
                fontWeight: "bold",
                color: "#1E2D3B",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F4CB4D")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              ❮
            </button>
          </div>
        )}

        {/* Right Arrow Button */}
        {canScrollRight && (
          <div style={{
            position: "absolute",
            top: "50%",
            right: isMobile ? "-10px" : "-20px",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}>
            <button
              onClick={scrollRight}
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: isMobile ? "32px" : "40px",
                height: isMobile ? "32px" : "40px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "16px" : "20px",
                fontWeight: "bold",
                color: "#1E2D3B",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F4CB4D")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              ❯
            </button>
          </div>
        )}

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "16px" : "18px",
          }}
        >
          {visibleProducts.map((rice) => (
            <div
              key={rice.slug}
              onClick={() => handleProductClick(rice.slug)}
              style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img 
                src={rice.img} 
                alt={rice.name}
                style={{ 
                  width: "100%", 
                  height: isMobile ? "200px" : "220px",
                  objectFit: "cover"
                }} 
              />
              <div style={{ padding: isMobile ? "12px" : "16px" }}>
                <h3 style={{ 
                  margin: "6px 0", 
                  color: "#1E2D3B", 
                  fontSize: isMobile ? "1.1rem" : "1.25rem" 
                }}>
                  {rice.name}
                </h3>
                <p style={{ 
                  color: "#6b7280", 
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: isMobile ? "0.85rem" : "0.95rem"
                }}>
                  {rice.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "8px",
        }}>
          {Array.from({ length: totalProducts - visibleItems + 1 }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                resetAutoScroll();
              }}
              style={{
                width: isMobile ? "10px" : "8px",
                height: isMobile ? "10px" : "8px",
                borderRadius: "50%",
                backgroundColor: currentIndex === idx ? "#7393B3" : "#CBD5E1",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}