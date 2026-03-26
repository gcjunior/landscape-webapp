import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const viewport: Viewport = {
  themeColor: "#003a1b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Taligado Landscaping | Snow Removal & Lawn Care",
  description:
    "Reliable snow removal and lawn care services with affordable pricing and fast local support.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Taligado Landscaping | Snow Removal & Lawn Care",
    description:
      "Reliable snow removal and lawn care services with affordable pricing and fast local support.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Taligado Landscaping | Snow Removal & Lawn Care",
    description:
      "Reliable snow removal and lawn care services with affordable pricing and fast local support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
