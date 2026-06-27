import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GC Venture Pvt Ltd",
  description: "Enterprise IT Rental & Telecom Infrastructure Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}