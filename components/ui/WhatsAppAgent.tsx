"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsAppAgent() {
  const { t } = useLanguage();

  const phoneNumber = "5122907012";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    t.whatsapp?.message ||
      "Hi Arthur's Tire Shop, I would like to get a free quote.",
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Main Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        // Mobile: w-14 h-14 (fixed circle), p-0 (center icon). Desktop: w-auto (auto width), px-8 py-3.
        className="group flex items-center justify-center bg-accent-yellow text-black rounded-full shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-bounce md:animate-none w-14 h-14 md:w-auto md:h-auto md:px-5 md:py-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Desktop Text Container - Hidden on mobile */}
        <div className="flex flex-col items-end hidden md:flex mr-4">
          {/* Large text for visibility */}
          <span className="font-black text-xl leading-none tracking-tight whitespace-nowrap">
            {t.whatsapp?.chatBtn || "Chat with us"}
          </span>
          <span className="text-sm font-bold leading-none mt-1 opacity-80 whitespace-nowrap">
            {t.whatsapp?.online || "Online now"}
          </span>
        </div>

        {/* Icon Container - RiWhatsappFill 5% larger than w-4 (1rem) approx w-[1.1rem] */}
        <div className="relative flex items-center justify-center">
          <RiWhatsappFill className="w-[1.2rem] h-[1.2rem] md:w-[1.4rem] md:h-[1.4rem] text-black" />
        </div>
      </motion.a>
    </div>
  );
}
