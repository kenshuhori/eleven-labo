import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ベストイレブン研究所 | Eleven Labo",
  description: "君が考えるベストイレブンを全世界に発信しよう！",
};

export const viewport: Viewport = {
  initialScale: 1.0,
  maximumScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ overflow: "hidden" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
