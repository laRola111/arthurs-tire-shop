"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function PerformanceTires() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white max-md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 skew-x-12 transform origin-top-right"></div>

          <div className="flex flex-col lg:flex-row items-center relative z-10">
            <div className="w-full lg:w-1/2 p-10 lg:p-16 text-gray-900">
              <div className="inline-block bg-black text-accent-yellow font-black uppercase text-xs px-3 py-1 rounded-full mb-6 shadow-md">
                {t.performance?.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6 tracking-tight">
                {t.performance?.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md font-medium">
                {t.performance?.desc}
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="material-icons text-white bg-green-600 rounded-full p-1 text-sm shadow-sm">
                    check
                  </span>
                  <span className="font-bold text-gray-800">
                    {t.performance?.feature1}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons text-white bg-green-600 rounded-full p-1 text-sm shadow-sm">
                    check
                  </span>
                  <span className="font-bold text-gray-800">
                    {t.performance?.feature2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons text-white bg-green-600 rounded-full p-1 text-sm shadow-sm">
                    check
                  </span>
                  <span className="font-bold text-gray-800">
                    {t.performance?.feature3}
                  </span>
                </li>
              </ul>

              <a
                href="#location"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl group"
              >
                {t.performance?.cta}
                <span className="material-icons group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] mt-8 lg:mt-0 bg-white">
              <Image
                src="/imagen_llanta_web.png"
                alt="Performance Tire"
                fill
                className="object-cover object-center lg:clip-slant-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
