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
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.png"
              alt="TSK Exports and Imports"
              style={{
                height: "200px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          <NavLinks />
        </nav>
        {children}
        <footer>
          &copy; {new Date().getFullYear()} TSK Exports and Imports. All rights reserved.
        </footer>
      </body>
    </html>
  );
}