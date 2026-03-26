import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taligado Landscaping | Snow Removal & Lawn Care",
  description:
    "Reliable snow removal and lawn care services with affordable pricing and fast local support.",
  icons: {
    icon: "/favicon.png",
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
