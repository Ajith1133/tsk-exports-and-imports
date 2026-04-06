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
          alignItems: "stretch",
          justifyContent: "space-between",
          minHeight: "500px",
          gap: "2rem",
          width: "100%",
          paddingRight: "0",
        }}
      >
        {/* LEFT SIDE - IMAGE */}
        <div
          style={{
            flex: "1",
            minHeight: "400px",
          }}
        >
          <img
            src="https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069346-paddy-wallpapers-1920x476.jpg" // your static image
            alt="rice"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div
          style={{
            flex: "1",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            padding: "1rem",
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

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
height: "40px",
width: "fit-content", 
            }}
          >
            <button style={{
              backgroundColor: "#234c72",
              color: "#fff",
                                  fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderRadius: "5px",
                    
            }} onClick={() => router.push('/contact-us')}>
              Contact Us
            </button>

            <button style={{
              backgroundColor: "#234c72",
              color: "#fff",
                                  fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderRadius: "5px",  

            }} onClick={() => router.push('/products')}>
              View Products
            </button>
          </div>
        </div>
      </div>
      {/* About us and products sections */}
      <div>
        <section
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
            background: "#99BE63",
            marginTop: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-between",
              minHeight: "500px",
              gap: "2rem",
              width: "100%",
            }}
          >
            {/* LEFT SIDE - TEXT */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                padding: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  color: "#161306",
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
              >
                About Us
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#070b12",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
                }}
              >
                "Thaswikha Exports and Imports" was established in the year 2016 in Chennai, Tamilnadu,
                India and with primary focus of reaching the international market to meet the supply
                and demand. We are a leading exporter of all varieties of Non-Basmati Rice with superior
                quality of international standards. We believe in Quality of product is the primary
                aspect of any business especially in exports and Imports. We trust on
                <strong style={{ color: "#234c72" }}> "No Quality – No Business"</strong>.
              </p>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#070b12",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
                }}
              >
                India is the world's largest producer of Rice. It contributes 21.5 percent of global
                rice production. Within the country, rice occupies one-quarter of the total cropped
                area and it contributes about 40 to 43 percent of total food grain production and
                It continues to play vital role in the national exports.
              </p>

              <div>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/about-us');
                  }}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#234c72",
                    color: "#fff",
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
                    e.currentTarget.style.backgroundColor = "#234c72"
                    e.currentTarget.style.borderColor = "#201c6f"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#122e48"; // Back to original
                    e.currentTarget.style.borderColor = "#201c6f"; // Back to original
                  }}
                >
                  READ MORE
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div
              style={{
                flex: "1",
                minHeight: "500px",
              }}
            >
              <img
                src="https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069320-paddy-wallpapers-1-scaled-1920x476.jpg"
                alt="paddy fields"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "2rem",
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
                  fontSize: "3.2rem",
                  fontWeight: "400",
                  marginBottom: "1rem",
                  color: "#122e48",
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
                  // padding: "1.5rem",
                  backgroundColor: "#122e48",
                  // borderRadius: "0.5rem",
                  border: "1px solid #201c6f",
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#234c72"
                  e.currentTarget.style.borderColor = "#201c6f"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#122e48"; // Back to original
                  e.currentTarget.style.borderColor = "#201c6f"; // Back to original
                }}
              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2024/10/ir64-white-rice-370x250.jpg"
                  alt="IR64 Long Grain White Rice (Non Basmati)"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderBottomLeftRadius: "2rem",
                    borderBottomRightRadius: "2rem",
                    marginBottom: "1rem",
                    display: "block",
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
                  // padding: "1.5rem",
                  backgroundColor: "#122e48",
                  // borderRadius: "0.5rem",
                  border: "1px solid #201c6f",
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#234c72"
                  e.currentTarget.style.borderColor = "#201c6f"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#122e48"; // Back to original
                  e.currentTarget.style.borderColor = "#201c6f"; // Back to original
                }}
              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2018/04/IR64-parboiled-rice-370x250.jpg"
                  alt="IR64 Long Grain Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderBottomLeftRadius: "2rem",
                    borderBottomRightRadius: "2rem",
                    marginBottom: "1rem",
                    display: "block",
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
                  // padding: "1.5rem",
                  backgroundColor: "#122e48",
                  // borderRadius: "0.5rem",
                  border: "1px solid #201c6f",
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#234c72"
                  e.currentTarget.style.borderColor = "#201c6f"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#122e48"; // Back to original
                  e.currentTarget.style.borderColor = "#201c6f"; // Back to original
                }}

              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2015/09/swarna-boiled-rice-500x500-1-370x250.jpeg"
                  alt="Swarna Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderBottomLeftRadius: "2rem",
                    borderBottomRightRadius: "2rem",
                    marginBottom: "1rem",
                    display: "block",
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