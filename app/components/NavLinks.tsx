"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetBreakpoints } from "../hooks/useGetBreakpoints";
import { useEffect, useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const { isMobile } = useGetBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname])
  
  const getStyle = (path: string) => ({
    textDecoration: "none",
    padding: isMobile ? "6px 10px" : "8px 16px",
    borderRadius: "6px",
    color: "#171309",
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.2s ease",
    fontSize: isMobile ? ".75rem" : "1rem",
  });

  return (
    <div style={{ display: "flex", gap: isMobile ? "0" : "1.5rem" }}>
      <Link href="/" style={getStyle("/")}>Home</Link>
      <Link href="/about-us" style={getStyle("/about-us")}>About Us</Link>
      <Link href="/products" style={getStyle("/products")}>Products</Link>
      <Link href="/contact-us" style={getStyle("/contact-us")}>Contact Us</Link>
      <Link href="/faqs" style={getStyle("/faqs")}>FAQs</Link>
    </div>
  );
}