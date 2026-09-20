import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "The Call — Decisions worth making",
  description:
    "Step into a real business crisis. Question your analyst. Make the call.",
  applicationName: "The Call",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "The Call",
  },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  robots: { index: false, follow: false },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#182d27",
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
