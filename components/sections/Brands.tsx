"use client";

import { useLanguage } from "@/context/LanguageContext";

const brands = [
  "Michelin",
  "Bridgestone",
  "Goodyear",
  "Continental",
  "Pirelli",
  "Dunlop",
  "Yokohama",
  "Atlas Tires",
  "Atlander",
  "Delinte",
  "Premiorri",
  "Fuzion",
  "Toyo Tires",
  "Mickey Thompson",
  "Starfire Tires",
  "Vantage",
  "Firestone",
  "Kelly Tires",
  "Achilles",
  "Cooper Tires",
  "Roadmaster Tires",
  "Omni Trail",
  "General Tire",
  "Falken",
  "Hankook",
  "Kumho Tire",
  "Nexen",
  "Mastercraft Tires",
  "Double Coin",
  "Supercargo",
  "Thunderer",
  "Trelleborg",
  "Carlisle",
  "BKT",
  "Mitas",
  "Titan",
  "Goodyear Farm Tires",
  "Ironhead",
];

const styles = [
  "italic tracking-tighter",
  "tracking-wider",
  "font-serif",
  "tracking-tighter",
  "italic",
  "font-mono",
  "tracking-widest",
];

export default function Brands() {
  const { t } = useLanguage();

  return (
    <section
      id="brands"
      className="py-12 bg-dark-charcoal border-y border-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h4 className="text-gray-400 uppercase tracking-widest text-sm font-bold">
          {t.brandSection.title}
        </h4>
      </div>
      {/* Brands container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 md:gap-12 items-center justify-center flex-wrap opacity-70 hover:opacity-100 transition-opacity duration-300">
          {brands.map((brand, i) => (
            <div
              key={brand}
              className={`text-xl md:text-2xl font-black text-gray-500 hover:text-white uppercase ${styles[i % styles.length]}`}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
