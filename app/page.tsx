import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductRange from "@/components/product-range";
import CompanyInfo from "@/components/company-info";
import IndustriesServed from "@/components/industries-served";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductRange />
        <CompanyInfo />
        <IndustriesServed />
      </main>
      <Footer />
    </div>
  );
}
