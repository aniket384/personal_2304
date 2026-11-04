import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Something for Suruti ♡",
  description: "A little corner of the universe made to remind Suruti how special she is.",
  applicationName: "A Little Something for Suruti",
  openGraph: {
    title: "A Little Something for Suruti ♡",
    description: "A little corner of the universe, made with love.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#190b17"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
