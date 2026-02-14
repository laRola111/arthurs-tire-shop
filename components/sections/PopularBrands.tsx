"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const brands = [
  "Atlas Tires",
  "Atlander",
  "Delinte",
  "Premiorri",
  "Michelin",
  "Continental",
  "Pirelli",
  "Goodyear",
];

export default function PopularBrands() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-black border-b border-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {t.popularBrands.title}
        </h2>
        <div className="w-16 h-1 bg-accent-yellow mx-auto mt-4"></div>
      </div>

      <div className="flex overflow-hidden relative fade-sides">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="text-3xl md:text-5xl font-black text-white/20 hover:text-white transition-colors uppercase italic tracking-tighter cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .fade-sides {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
