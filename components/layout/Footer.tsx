"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo_arthurs_para_negro.png"
                alt="Arthur's Tire Shop"
                width={200}
                height={60}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-gray-500 text-sm max-w-sm">{t.footer?.desc}</p>
          </div>

          <div>
            <h5 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
              {t.footer?.contact}
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-icons text-xs">phone</span> (512)
                290-7012
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-xs">phone</span> (512)
                215-0531
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-xs">email</span>{" "}
                info@arthurstires.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-xs">pin_drop</span> Cedar
                Creek, TX
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
              {t.footer?.quickLinks}
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t.header?.services}
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="hover:text-white transition-colors"
                >
                  {t.hero?.getQuote}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  {t.footer?.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div className="flex flex-col md:flex-row gap-1 items-center">
            <p>{t.footer?.rights}</p>
            <span className="hidden md:block mx-2">|</span>
            <p>
              {t.footer?.credits}{" "}
              <a
                href="https://ruedalarolamedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors underline"
              >
                Rueda la Rola Media
              </a>
            </p>
          </div>

          {/* Social Media Links - Hidden until URLs provided
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">
              Facebook
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Instagram
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Yelp
            </span>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}
