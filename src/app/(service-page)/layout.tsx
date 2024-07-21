import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="global-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
