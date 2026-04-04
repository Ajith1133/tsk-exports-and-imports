import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavLinks from "@/app/components/NavLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TSK Exports & Imports",
  description:
    "Premium Rice Exporters & Importers - Home, Products, About Us, Contact, FAQs.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 2rem",
            height: "80px",
            background: "linear-gradient(to bottom right, #111827, #1f2937, #064e3b)",

          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <img
              src="/logo.png"
              alt="TSK Exports and Imports"
              style={{
                height: "200px",
                width: "auto",
                objectFit: "contain",
              }}
            /> */}
            <h2>
              <span style={{ color: "#4ADE80" }}>TSK </span>
              <span style={{ color: "#fff" }}>Exports and Imports</span>
            </h2>
          </div>
          <NavLinks />
        </nav>
        {children}
        <footer
          style={{
            backgroundColor: "#111827",
            padding: "2rem",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Contact Details Section - Top Right */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end", // Aligns to the right
                gap: "3rem",
                flexWrap: "wrap",
                marginRight: "1rem",
              }}
            >
              {/* Phone */}
              <div style={{ marginBottom: "16px", textAlign: "right" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px" }}>
                  PHONE
                </div>
                <a
                  href="tel:+917358501234"
                  style={{
                    color: "#4ADE80", // Changed to green to match theme
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  +91-7358501234
                </a>
              </div>

              <div style={{ marginBottom: "16px", textAlign: "right" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px" }}>
                  EMAIL
                </div>
                <a
                  href="mailto:enquiry@tskexportsandimports.com"
                  style={{
                    color: "#4ADE80", // Changed to green to match theme
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  enquiry@tskexportsandimports.com
                </a>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#9CA3AF",
                fontSize: "0.875rem",
                paddingTop: "1rem",
              }}
            >
              &copy; {new Date().getFullYear()} TSK Exports and Imports. All rights reserved. | <span>Terms and Conditions | </span> <span> Privacy Policy </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}