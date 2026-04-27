"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect, useRef } from 'react';
import { useGetBreakpoints } from '../hooks/useGetBreakpoints';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [showText, setShowText] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<any>(null);
  const { isMobile } = useGetBreakpoints();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", height: isMobile ? "400px" : "600px" }}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        style={{ height: "100%" }}
        speed={1000}
         onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="slide"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                    display: "block"   // ✅ IMPORTANT FIX

              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* TEXT with animation */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "2%",
          color: "#f9fafb",
          opacity: showText ? 1 : 0,
          transform: showText ? "translateY(0px)" : "translateY(-50px)",
          transition: "all 0.8s ease",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "1.75rem" : "4.5rem",
            fontWeight: isMobile ? "700" : "800",
            marginBottom: "1rem",
            // whiteSpace: "nowrap"
          }}
        >
          TSK Exports and Imports
        </h1>
        <p style={{ fontSize: isMobile? "1rem" : "1.3rem" }}>
          Premium exporters of the finest rice varieties. Delivering quality and trust worldwide.
        </p>
      </div>

       <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          zIndex: 20,
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(idx);
              }
            }}
            style={{
              width: activeIndex === idx ? "10px" : "8px",
              height: activeIndex === idx ? "10px" : "8px",
              borderRadius: "50%",
              backgroundColor: activeIndex === idx ? "#ffffff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Custom Grey Navigation Arrows as Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#9ca3af",
          border: "none",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "20px",
          borderRadius: "5px",
          zIndex: 20,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.7)";
          e.currentTarget.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.5)";
          e.currentTarget.style.color = "#9ca3af";
        }}
      >
        ❮
      </button>
      
      <button
        onClick={() => swiperRef.current?.slideNext()}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#9ca3af",
          border: "none",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "20px",
          borderRadius: "5px",
          zIndex: 20,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.7)";
          e.currentTarget.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.5)";
          e.currentTarget.style.color = "#9ca3af";
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;