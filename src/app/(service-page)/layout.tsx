import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="global-container">
      <GoogleAnalytics gaId={process.env.GA_ID ?? ""} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
