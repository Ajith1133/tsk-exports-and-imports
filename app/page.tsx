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
  const [showText, setShowText] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowText(true);
  }, 300);

  return () => clearTimeout(timer);
}, []);


  return (
    <>

    <div
  style={{
    position: "relative",
    width: "100%",
    height: "600px",
    overflow: "hidden",
  }}
>
  {/* IMAGE */}
  <img
    src="/ExportImportImg.png"
    alt="rice"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />

  {/* OVERLAY (optional dark effect) */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",

    }}
  />

  {/* TEXT */}
  <div
    style={{
      position: "absolute",
      top: "10%",
      marginLeft: "1rem",
      textAlign: "center",
      color: "#f9fafb",
    opacity: showText ? 1 : 0,
    transform: showText
      ? "translateY(0px)"
      : "translateY(-50px)", // start above

    transition: "all 0.8s ease",
    }}
  >
    <h1
      style={{
        fontSize: "4.5rem",
        fontWeight: "800",
        marginBottom: "1rem",
        whiteSpace: "nowrap"
      }}
    >
      TSK Exports and Imports
    </h1>

    <p
      style={{
        fontSize: "1.40rem",
        maxWidth: "600px",
        whiteSpace: "nowrap",
      marginLeft: "1rem",

      }}
    >
      Premium exporters of the finest rice varieties. Delivering quality and trust worldwide.
    </p>
  </div>
</div>

      {/* About us and products sections */}
      <div>
        <section
          style={{
            position: "relative",
            paddingTop: "6rem",
            paddingBottom: "4rem",
            background: "#CDEF7F",
          }}
        >
           <div
    style={{
      position: "absolute",
      top: "-1px",
      left: 0,
      width: "100%",
      overflow: "hidden",
      lineHeight: 0,
    }}
  >
    <svg
      viewBox="0 0 1440 175"
      style={{ display: "block", width: "100%", height: "100px" }}
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C480,150 960,150 1440,0 L1440,0 L0,0 Z"
        fill="#ffffff"
      />
    </svg>
  </div>


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
            <div
              style={{
                flex: "1",
                minHeight: "500px",
                
              }}
            >
              <img
                src="https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069346-paddy-wallpapers-1920x476.jpg"
                alt="paddy fields"
                style={{
                  width: "80%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  padding: "2rem",
                }}
              />
            </div>

                        <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: ".5rem",
                padding: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "3.5rem",
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
                  marginBottom: "1rem",
                  width: "70%",
                }}
              >
                "Thaswikha Exports and Imports" was established in the year 2016 in Chennai, Tamilnadu,
                India and with primary focus of reaching the international market to meet the supply
                and demand. We are a leading exporter of all varieties of Non-Basmati Rice with superior
                quality of international standards. We believe in Quality of product is the primary
                aspect of any business especially in exports and Imports. We trust on
                "No Quality – No Business".
              </p>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#070b12",
                  marginBottom: "1rem",
                  width: "70%",
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
                    backgroundColor: "#0c77a1",
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
                    e.currentTarget.style.backgroundColor = "#0c77a1"; // Back to original
                    e.currentTarget.style.borderColor = "#073c51"; // Back to original
                  }}
                >
                  READ MORE
                </a>
              </div>
            </div>

          </div>
        </section>

        <section
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
                  fontSize: "4rem",
                  fontWeight: "400",
                  marginBottom: "1rem",
                  marginTop: "0",
                  paddingTop: "2rem",
                  color: "#1E2D3B",
                }}
              >
                Our Products
              </h2>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10rem",
              }}
            >
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("IR64 Long Grain White Rice (Non Basmati)")}`;
                }}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}
              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2024/10/ir64-white-rice-370x250.jpg"
                  alt="IR64 Long Grain White Rice (Non Basmati)"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                    display: "block",
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: "400",
                    color: "#1E2D3B",
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
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}
              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2018/04/IR64-parboiled-rice-370x250.jpg"
                  alt="IR64 Long Grain Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                    display: "block",
                  }}
                />

                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: "400",
                    color: "#1E2D3B",

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
                  cursor: "pointer",
                  transition: "all 0.1s ease",
                }}

              >
                <img
                  src="https://tskexportsandimports.com/web/wp-content/uploads/2015/09/swarna-boiled-rice-500x500-1-370x250.jpeg"
                  alt="Swarna Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                    display: "block",
                  }}
                />


                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: "400",
                    color: "#1E2D3B",
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