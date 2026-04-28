"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import Carousel from "./components/Carousel";
import Products from "./products/page";
import QuickInquiry from "./components/QuickInquiry";
import Certificates from "./components/Certificates";
import AboutUs from "./components/AboutUs";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import ProductsClient from "./products/ProductsClient";


export default function Home() {
    const images = [
        "https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069346-paddy-wallpapers-1920x476.jpg",
        "https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069320-paddy-wallpapers-1-scaled-1920x476.jpg",
        "/ExportImportImg.png"
    ];

    const aboutRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <>
            <Carousel images={images} />
            <AboutUs />
            <Suspense>
                <ProductsClient />
            </Suspense>
            <Certificates />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#F4CB4D",
                    },
                }}
            >
                <QuickInquiry />
            </ConfigProvider>
        </>
    );
}