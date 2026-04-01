"use client";

import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      {/* HERO SECTION */}
      <main className="container home-hero">
        <h1 className="home-title">TSK Exports And Imports</h1>
        <p className="home-subtitle">
          Premium exporters of the finest rice varieties.
          Delivering quality and trust worldwide.
        </p>
      </main>

      {/* SLIDER SECTION */}
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          position: "relative",
          marginTop: "2rem",
        }}
      >
        {/* IMAGE */}
        <img
          src={images[current]}
          alt="slider"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
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
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}