import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollHero from "@/components/sections/ScrollHero";
import Services from "@/components/sections/Services";
import PopularBrands from "@/components/sections/PopularBrands";
import Brands from "@/components/sections/Brands";
import LocationContact from "@/components/sections/LocationContact";
import WhatsAppAgent from "@/components/ui/WhatsAppAgent";

import PerformanceTires from "@/components/sections/PerformanceTires";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light font-display">
      <Header />
      <ScrollHero />
      <Services />
      <PopularBrands />
      <PerformanceTires />
      <Reviews />
      <Brands />
      <LocationContact />
      <Footer />
      <WhatsAppAgent />
    </main>
  );
}
