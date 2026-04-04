"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {
  const router = useRouter();
  const images = [
    "https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069346-paddy-wallpapers-1920x476.jpg",
    "https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069320-paddy-wallpapers-1-scaled-1920x476.jpg",
    "https://tskexportsandimports.com/web/wp-content/uploads/2022/11/container-vessel-1920x476.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",      // Vertically centers both columns
          justifyContent: "space-between",  // Puts space between left and right content
          minHeight: "60vh",        // Takes full viewport height for proper centering
          maxWidth: "1200px",        // Optional: limits overall width
          margin: "0 auto",          // Centers the entire container
          padding: "2rem",
          gap: "3rem",               // Space between text and image
        }}
      >
        {/* LEFT SIDE - TEXT CONTENT */}
        <div
          style={{
            flex: "1",               // Takes available space
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "400",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            <span style={{ color: "#166534" }}>TSK </span>
            <span style={{ color: "#111827" }}>Exports and Imports</span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#1f2937",
              marginBottom: "2rem",
              maxWidth: "42rem",
              lineHeight: "1.6",
            }}
          >
            Premium exporters of the finest rice varieties.
            Delivering quality and trust worldwide.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* CONTACT US BUTTON */}
            <button
              onClick={() => router.push('/contact-us')}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                whiteSpace: "nowrap",
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "all 0.2s",
                backgroundColor: "#16A34A", // green-600
                color: "#FFFFFF",
                borderRadius: "0.375rem",
                height: "2.5rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#15803D"; // green-700
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#16A34A"; // green-600
              }}
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>

            {/* VIEW PRODUCTS BUTTON */}
            <button
              onClick={() => router.push('/products')}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                whiteSpace: "nowrap",
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "all 0.2s",
                backgroundColor: "transparent",
                color: "#4ADE80",
                borderRadius: "0.375rem",
                height: "2.5rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                border: "1px solid #4ADE80",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#4ADE80";
                (e.target as HTMLElement).style.color = "#111827";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "#4ADE80";
              }}
            >
              View Products
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE SLIDER */}
        <div
          style={{
            flex: "1",               // Takes available space
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={images[current]}
            alt="slider"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "18px",
              zIndex: 10,
            }}
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "18px",
              zIndex: 10,
            }}
          >
            ›
          </button>
        </div>
      </div>
      <div>
        <section
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
            background: "linear-gradient(to right, #166534, #16A34A)", // from-green-800 to-green-600
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Content Section */}
              <div>
                <h2
                  style={{
                    fontSize: "1.875rem",
                    marginBottom: "0.5rem",
                    color: "#FDE68A",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  About Us
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#D1D5DB",
                    lineHeight: "1.8",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  "Thaswikha Exports and Imports" was established in the year 2016 in Chennai, Tamilnadu,
                  India and with primary focus of reaching the international market to meet the supply
                  and demand. We are a leading exporter of all varieties of Non-Basmati Rice with superior
                  quality of international standards. We believe in Quality of product is the primary
                  aspect of any business especially in exports and Imports. We trust on
                  <strong style={{ color: "#4ADE80" }}> "No Quality – No Business"</strong>.
                </p>

                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#D1D5DB",
                    lineHeight: "1.8",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  India is the world's largest producer of Rice. It contributes 21.5 percent of global
                  rice production. Within the country, rice occupies one-quarter of the total cropped
                  area and it contributes about 40 to 43 percent of total food grain production and
                  It continues to play vital role in the national exports.
                </p>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#D1D5DB",
                    lineHeight: "1.8",
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  Major destinations for India's non-basmati rice exports are Bangladesh, Australia,
                  Bahrain, Ethiopia, Djibouti, France, Germany, U.K., Hong Kong, Korea, Sri-Lanka,
                  Maldives, Mauritius, Malaysia, Nigeria, Ivory coast, Indonesia, Nepal, Oman, Qatar,
                  Russia, South Africa, Saudi Arabia, Somalia, Singapore, U.A.E., Y.A.R., etc.
                </p>

                <div style={{ textAlign: "center" }}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push('/about-us');
                    }}
                    style={{
                      display: "inline-block",
                      backgroundColor: "#4ADE80",
                      color: "#1F2937",
                      padding: "12px 30px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      borderRadius: "5px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      border: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "#FDE68A";
                      (e.target as HTMLElement).style.color = "#1F2937";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "transparent";
                      (e.target as HTMLElement).style.color = "#4ADE80";
                    }}
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
            backgroundColor: "#FDE68A", // bg-gray-800
            marginTop: "2rem", // Optional: adds spacing from previous section
          }}
        >
          <div
            style={{
              maxWidth: "80rem", // max-w-7xl
              margin: "0 auto",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {/* Header Section */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.875rem",
                  marginBottom: "1rem",
                  color: "#111827", // text-green-400
                }}
              >
                Our Products
              </h2>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
            >
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("IR64 Long Grain White Rice (Non Basmati)")}`;
                }}
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  border: "1px solid #374151",
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2937"
                  e.currentTarget.style.borderColor = "#4ADE80"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827"; // Back to original
                  e.currentTarget.style.borderColor = "#374151"; // Back to original
                }}
              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2024/10/ir64-white-rice-370x250.jpg"
                  alt="IR64 Long Grain White Rice (Non Basmati)"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: "400",
                    color: "#FDE68A", // text-amber-200
                  }}
                >
                  IR64 Long Grain White Rice (Non Basmati)

                </h3>
              </div>
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("IR64 Long Grain Parboiled Rice")}`;
                }}
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  border: "1px solid #374151",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2937"
                  e.currentTarget.style.borderColor = "#4ADE80"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827"; // Back to original
                  e.currentTarget.style.borderColor = "#374151"; // Back to original
                }}
              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2018/04/IR64-parboiled-rice-370x250.jpg"
                  alt="IR64 Long Grain Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                />

                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: "400",
                    color: "#FDE68A",
                  }}
                >
                  IR64 Long Grain Parboiled Rice
                </h3>
              </div>
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("Swarna Parboiled Rice")}`;
                }}
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  border: "1px solid #374151",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F2937";
                  e.currentTarget.style.borderColor = "#4ADE80";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.borderColor = "#374151";
                }}

              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2015/09/swarna-boiled-rice-500x500-1-370x250.jpeg"
                  alt="Swarna Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                />


                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: "400",
                    color: "#FDE68A",
                  }}
                >
                  Swarna Parboiled Rice
                </h3>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}