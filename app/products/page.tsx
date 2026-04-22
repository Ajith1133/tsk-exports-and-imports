"use client";

import { useState, useEffect, useRef } from "react";
import { riceProducts } from "./productsData";

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProducts = riceProducts.length;
  const visibleItems = 3;
  const autoScrollIntervalRef = useRef<any>(null);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + visibleItems < totalProducts;

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

  // Auto scroll to next set
  const autoScroll = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the beginning
      setCurrentIndex(0);
    }
  };

  // Reset auto scroll timer
  const resetAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(autoScroll, 5000); // Change slide every 5 seconds
  };

  // Start auto scroll on component mount
  useEffect(() => {
    resetAutoScroll();

    // Cleanup interval on component unmount
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [currentIndex]); // Re-run when currentIndex changes to reset timer

  // Get the visible products based on current index
  const visibleProducts = riceProducts.slice(currentIndex, currentIndex + visibleItems);

  return (
    <section
      style={{
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "left",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "0.5rem",
              color: "#1E2D3B",
            }}
          >
            Our Rice Products
          </h2>
          <h4 style={{ color: "#4a5568", fontWeight: "normal" }}>
            Click on any of the below product to view more details and send an enquiry. You can also email us on enquiry@tskexportsandimports.com to get more details.
          </h4>
        </div>

        {/* Left Arrow Button
        {canScrollLeft && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <button
              onClick={scrollLeft}
              style={{
                background: "#fff",
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
        )} */}

        {/* Right Arrow Button */}
        {/* {canScrollRight && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <button
              onClick={scrollRight}
              style={{
                background: "#fff",
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
        )} */}

        {/* Grid Container - shows exactly 3 items */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {visibleProducts.map((rice) => {
            return (
              <div
                key={rice.name}
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent(rice.name)}`;
                }}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src={rice.img}
                  alt={rice.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "6px 0", color: "#1E2D3B" }}>{rice.name}</h3>
                  <p
                    style={{
                      color: "#6b7280",
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {rice.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "8px",
          }}
        >
          {Array.from({ length: totalProducts - visibleItems + 1 }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                resetAutoScroll();
              }}
              style={{
                width: "8px",
                height: "8px",
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