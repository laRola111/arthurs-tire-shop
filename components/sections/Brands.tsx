"use client";

import { useLanguage } from "@/context/LanguageContext";

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
      {/* Scrolling Marquee effect container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 items-center justify-center flex-wrap opacity-70 hover:opacity-100 transition-opacity duration-300">
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase italic tracking-tighter">
            Michelin
          </div>
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase tracking-wider">
            Bridgestone
          </div>
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase font-serif">
            Goodyear
          </div>
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase tracking-tighter">
            Continental
          </div>
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase italic">
            Pirelli
          </div>
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase font-mono">
            Dunlop
          </div>
          <div className="text-2xl font-black text-gray-500 hover:text-white uppercase tracking-widest">
            Yokohama
          </div>
        </div>
      </div>
    </section>
  );
}
