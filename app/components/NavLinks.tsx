"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const getStyle = (path: string) => ({
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: pathname === path ? "#7393B3" : "transparent",
    color: pathname === path ? "white" : "#222",
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.2s ease",
  });

  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <Link href="/" style={getStyle("/")}>Home</Link>
      <Link href="/about-us" style={getStyle("/about-us")}>About Us</Link>
      <Link href="/products" style={getStyle("/products")}>Products</Link>
      <Link href="/contact-us" style={getStyle("/contact-us")}>Contact Us</Link>
      <Link href="/faqs" style={getStyle("/faqs")}>FAQs</Link>
    </div>
  );
}