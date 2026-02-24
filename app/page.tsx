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
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair", "TireShop"],
    name: "Arthur's Tire Shop",
    image: "https://arthurstire.com/logo_arthurs_para_negro.png",
    "@id": "https://arthurstire.com",
    url: "https://arthurstire.com",
    telephone: "+15122907012",
    address: {
      "@type": "PostalAddress",
      streetAddress: "E William Cannon Dr", // La dirección exacta se debe ajustar luego
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78744", // Asumiendo código postal, puede cambiarse // TODO: confirm zip code
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1878, // TODO: verify precise coordinates
      longitude: -97.7471,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/arthurstires", // TODO: replace with real links
      "https://www.instagram.com/arthurstires",
    ],
  };

  return (
    <main className="min-h-screen bg-background-light font-display">
      <Script
        id="schema-org-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
