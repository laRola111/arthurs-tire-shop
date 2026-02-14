"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b-4 border-primary shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
          >
            <Image
              src="/logo_arthurs_para_blanco.png"
              alt="Arthur's Tire Shop"
              width={200}
              height={60}
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary font-bold uppercase text-sm tracking-wide transition-colors"
            >
              {t.header.services}
            </Link>
            <Link
              href="#brands"
              className="text-gray-700 hover:text-primary font-bold uppercase text-sm tracking-wide transition-colors"
            >
              {t.header.brands}
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary font-bold uppercase text-sm tracking-wide transition-colors"
            >
              {t.header.about}
            </Link>
            <Link
              href="#location"
              className="text-gray-700 hover:text-primary font-bold uppercase text-sm tracking-wide transition-colors"
            >
              {t.header.location}
            </Link>

            {/* Language Toggle Desktop */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded-full border border-gray-300 text-xs font-bold hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              <span
                className={language === "EN" ? "text-primary" : "text-gray-400"}
              >
                EN
              </span>
              <span className="text-gray-300">|</span>
              <span
                className={language === "ES" ? "text-primary" : "text-gray-400"}
              >
                ES
              </span>
            </button>
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-xs text-gray-500 font-semibold uppercase">
              {t.header.callAssist}
            </span>
            <a
              href="tel:5122907012"
              className="flex items-center gap-2 text-primary hover:text-accent-yellow transition-colors font-black text-lg"
            >
              <span className="material-icons text-base">phone</span>
              (512) 290-7012
            </a>
            <span className="text-xs font-bold text-gray-400">
              | (512) 215-0531
            </span>
          </div>

          {/* Mobile Menu Button & Language */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded border border-gray-300 text-xs font-bold bg-gray-50 text-gray-700"
            >
              {language}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <span className="material-icons text-3xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#services"
              className="block px-3 py-4 rounded-md text-base font-bold uppercase text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.services}
            </Link>
            <Link
              href="#brands"
              className="block px-3 py-4 rounded-md text-base font-bold uppercase text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.brands}
            </Link>
            <Link
              href="#about"
              className="block px-3 py-4 rounded-md text-base font-bold uppercase text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.about}
            </Link>
            <Link
              href="#location"
              className="block px-3 py-4 rounded-md text-base font-bold uppercase text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.location}
            </Link>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <a
                href="tel:5122907012"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-3 rounded uppercase tracking-widest"
              >
                <span className="material-icons">phone</span>
                {t.header.callNow}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
