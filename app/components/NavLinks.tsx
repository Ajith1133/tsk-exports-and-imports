"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetBreakpoints } from "../hooks/useGetBreakpoints";
import { useEffect, useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const { isMobile } = useGetBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const hamburger = document.getElementById("hamburger-button");
      if (isMenuOpen && menu && hamburger && 
          !menu.contains(event.target as Node) && 
          !hamburger.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const getStyle = (path: string) => ({
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "#170910", // White text for better contrast on primary color
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    display: "block",
    width: "100%",
    textAlign: "center" as const,
    backgroundColor: pathname === path ? "rgba(255, 255, 255, 0.2)" : "transparent",
    hover: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    }
  });

  // Mobile Hamburg Menu
  if (isMobile) {
    return (
      <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
        {/* Hamburger Button - Aligned to Right */}
        <button
          id="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1001,
            position: "relative",
          }}
        >
          <span
            style={{
              width: "25px",
              height: "2px",
              backgroundColor: "#170910",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0deg)",
            }}
          />
          <span
            style={{
              width: "25px",
              height: "2px",
              backgroundColor: "#170910",
              transition: "all 0.3s ease",
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "25px",
              height: "2px",
              backgroundColor: "#170910",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(-45deg) translate(7px, -7px)" : "rotate(0deg)",
            }}
          />
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                transition: "all 0.3s ease",
              }}
            />
            
            {/* Menu Panel - Primary Color Background */}
            <div
              id="mobile-menu"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "280px",
                height: "100vh",
                backgroundColor: "#F4CB4D", // Primary color
                boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                padding: "80px 20px 20px 20px",
                transition: "transform 0.3s ease",
                transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link 
                href="/" 
                style={getStyle("/")}
                onMouseEnter={(e) => {
                  if (pathname !== "/") {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== "/") {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                style={getStyle("/about-us")}
                onMouseEnter={(e) => {
                  if (pathname !== "/about-us") {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== "/about-us") {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                style={getStyle("/products")}
                onMouseEnter={(e) => {
                  if (pathname !== "/products") {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== "/products") {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                Products
              </Link>
              <Link 
                href="/contact-us" 
                style={getStyle("/contact-us")}
                onMouseEnter={(e) => {
                  if (pathname !== "/contact-us") {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== "/contact-us") {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                Contact Us
              </Link>
              <Link 
                href="/faqs" 
                style={getStyle("/faqs")}
                onMouseEnter={(e) => {
                  if (pathname !== "/faqs") {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== "/faqs") {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                FAQs
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }

const desktopGetStyle = (path: string) => ({
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "6px",
  color: "#170910",
  fontWeight: pathname === path ? "600" : "400",
  transition: "all 0.3s ease",
  fontSize: "1rem",
  display: "inline-block",
});

return (
  <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
    <Link 
      href="/" 
      style={desktopGetStyle("/")}
      onMouseEnter={(e) => {
        if (pathname !== "/") {
          e.currentTarget.style.backgroundColor = "#F4CB4D";
          e.currentTarget.style.color = "#1E2D3B";
        }
      }}
      onMouseLeave={(e) => {
        if (pathname !== "/") {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#170910";
        }
      }}
    >
      Home
    </Link>
    <Link 
      href="/about-us" 
      style={desktopGetStyle("/about-us")}
      onMouseEnter={(e) => {
        if (pathname !== "/about-us") {
          e.currentTarget.style.backgroundColor = "#F4CB4D";
          e.currentTarget.style.color = "#1E2D3B";
        }
      }}
      onMouseLeave={(e) => {
        if (pathname !== "/about-us") {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#170910";
        }
      }}
    >
      About Us
    </Link>
    <Link 
      href="/products" 
      style={desktopGetStyle("/products")}
      onMouseEnter={(e) => {
        if (pathname !== "/products") {
          e.currentTarget.style.backgroundColor = "#F4CB4D";
          e.currentTarget.style.color = "#1E2D3B";
        }
      }}
      onMouseLeave={(e) => {
        if (pathname !== "/products") {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#170910";
        }
      }}
    >
      Products
    </Link>
    <Link 
      href="/contact-us" 
      style={desktopGetStyle("/contact-us")}
      onMouseEnter={(e) => {
        if (pathname !== "/contact-us") {
          e.currentTarget.style.backgroundColor = "#F4CB4D";
          e.currentTarget.style.color = "#1E2D3B";
        }
      }}
      onMouseLeave={(e) => {
        if (pathname !== "/contact-us") {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#170910";
        }
      }}
    >
      Contact Us
    </Link>
    <Link 
      href="/faqs" 
      style={desktopGetStyle("/faqs")}
      onMouseEnter={(e) => {
        if (pathname !== "/faqs") {
          e.currentTarget.style.backgroundColor = "#F4CB4D";
          e.currentTarget.style.color = "#1E2D3B";
        }
      }}
      onMouseLeave={(e) => {
        if (pathname !== "/faqs") {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#170910";
        }
      }}
    >
      FAQs
    </Link>
  </div>
);
}