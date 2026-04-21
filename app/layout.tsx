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
            justifyContent: "right",
            padding: "1.5rem 2rem",
            height: "1rem",
            background: "#F4CB4D",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <NavLinks />

        </nav>
        {children}
        <footer
          style={{
            backgroundColor: "#F4CB4D",
            padding: "2rem",
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
                justifyContent: "space-between", // Aligns to the right
                gap: "3rem",
                flexWrap: "wrap",
                marginRight: "1rem",
              }}
            >
              {/* LEFT SIDE - ADDRESS */}
              <div style={{ maxWidth: "400px", textAlign: "left" }}>
                <div style={{ fontSize: "20px", color: "#171309", marginBottom: "8px" }}>
                  Registered Address
                </div>

                THASWIKHA EXPORTS AND IMPORTS <br />
                Ground Floor, Plot No.221, Door No.8/8 <br />
                Sreevari Enclave, Elango Street <br />
                Alwarthirunagar, Chennai – 600087
              </div>

              {/* RIGHT SIDE - CONTACT */}
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "20px", color: "#171309", marginBottom: "8px" }}>
                  Contact Us
                </div>

                <a
                  href="tel:+917358501234"
                  style={{ color: "#171309", textDecoration: "none", display: "block" }}
                >
                  +91-7358501234
                </a>

                <a
                  href="mailto:enquiry@tskexportsandimports.com"
                  style={{ color: "#171309", textDecoration: "none", display: "block" }}
                >
                  enquiry@tskexportsandimports.com
                </a>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#171309",
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