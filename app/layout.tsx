import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { BackToTop } from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://setu-platform-rust.vercel.app"),
  title: {
    default: "SETU — Digital Growth & Intelligent Automation",
    template: "%s | SETU",
  },
  description:
    "SETU helps growing businesses build high-performance websites, generate leads and automate repetitive business processes.",
  keywords: [
    "SETU",
    "Digital Growth Company",
    "High-Performance Business Websites",
    "WhatsApp Lead Automation",
    "Local SEO Google Business",
    "Business Process Automation",
  ],
  authors: [{ name: "SETU", url: "https://setu-platform-rust.vercel.app" }],
  creator: "SETU",
  publisher: "SETU",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://setu-platform-rust.vercel.app",
    title: "SETU — Digital Growth & Intelligent Automation",
    description:
      "SETU helps growing businesses build high-performance websites, generate leads and automate repetitive business processes.",
    siteName: "SETU",
  },
  twitter: {
    card: "summary_large_image",
    title: "SETU — Digital Growth & Intelligent Automation",
    description:
      "SETU helps growing businesses build high-performance websites, generate leads and automate repetitive business processes.",
    creator: "@setugrowth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SETU",
    legalName: "SETU Digital Growth & Automation",
    url: "https://setu-platform-rust.vercel.app",
    description:
      "SETU helps growing businesses build high-performance websites, generate leads and automate repetitive business processes.",
    sameAs: [
      "https://linkedin.com",
      "https://github.com",
      "https://instagram.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-91092-65673",
      email: "amitrajput98267313@gmail.com",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <BackToTop />
      </body>
    </html>
  );
}
