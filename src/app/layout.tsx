import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "@/styles/globals.css";
import { inter } from "@/app/fonts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serviceDescription, serviceImageUrl, serviceTitleLong, serviceUrl } from "@/constants";

export const metadata: Metadata = {
  title: serviceTitleLong,
  description: serviceDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: serviceUrl,
    siteName: serviceTitleLong,
    images: [
      {
        url: serviceImageUrl,
        width: 1200,
        height: 630,
        alt: serviceTitleLong,
      },
    ],
  },
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
      <body className={inter.className}>
        <Providers>
          <div className="global-container">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
