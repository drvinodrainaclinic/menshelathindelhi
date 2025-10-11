import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientRoot from "@/components/ClientRoot";
import ComplianceNotice from "@/components/ComplianceNotice";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17581315055"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());

          gtag('config', 'AW-17581315055');
        `}</Script>
        <Script id="gtag-conversion" strategy="afterInteractive">{`
          window.gtag_report_conversion = function(url) {
            var callback = function () {
              if (typeof(url) !== 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-17581315055/fEzyCLWQ-6obEO-ntr9B',
              'value': 1.0,
              'currency': 'INR',
              'event_callback': callback
            });
            return false;
          };
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ComplianceNotice />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <ClientRoot />
        <Footer />
      </body>
    </html>
  );
}
