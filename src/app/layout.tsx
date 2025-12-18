import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LipoDual – miRNA Soybean Hydrogel Innovation",
  description: "LipoDual is a dual-miRNA soybean hydrogel innovation designed to accelerate wound healing through gene-level precision in a sustainable, plant-based system.",
  openGraph: {
    title: "LipoDual – miRNA Soybean Hydrogel Innovation",
    description: "Accelerating wound healing through gene-level precision in a sustainable, plant-based system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
