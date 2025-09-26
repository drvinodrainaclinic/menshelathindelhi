import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientRoot from "@/components/ClientRoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Vinod Raina Clinic | HIV Treatment & Sexual Health",
    template: "%s | Dr. Vinod Raina Clinic",
  },
  description:
    "Confidential, evidence-based HIV treatment and comprehensive sexual health services. Book an appointment online.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dr. Vinod Raina Clinic | HIV Treatment & Sexual Health",
    description:
      "Confidential, evidence-based HIV treatment and comprehensive sexual health services.",
    type: "website",
    url: "https://example.com",
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#dc2626",
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
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <ClientRoot />
        <Footer />
      </body>
    </html>
  );
}
