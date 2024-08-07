import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { inter, noto_sans_jp } from "@/app/fonts";
import { serviceDescription, serviceImageUrl, serviceTitleLong, serviceUrl } from "@/constants";
import favicon from "@public/favicon.ico";

export const metadata: Metadata = {
  title: serviceTitleLong,
  description: serviceDescription,
  icons: [{ rel: "icon", url: favicon.src }],
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
      <body className={`${inter.className} ${noto_sans_jp.className}`}>
        <ClerkProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
