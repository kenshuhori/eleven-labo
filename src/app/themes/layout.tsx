"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header backUrl="/" />
      {children}
      <Footer />
    </>
  );
}
