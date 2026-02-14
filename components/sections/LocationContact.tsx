"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationContact() {
  const { t } = useLanguage();

  return (
    <section id="location" className="relative bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Map Side */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto min-h-[400px] bg-gray-900 group overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
            alt="Map showing location in Cedar Creek"
            fill
            className="object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <a
              href="https://maps.google.com/?q=Arthur's+Tire+Shop+Cedar+Creek+TX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 backdrop-blur-sm text-gray-900 px-8 py-6 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all cursor-pointer border-2 border-white/50 hover:border-primary group/map-btn"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover/map-btn:bg-red-700 transition-colors shadow-lg">
                <span className="material-icons text-white text-3xl">
                  near_me
                </span>
              </div>
              <p className="font-black text-2xl uppercase tracking-tight mb-1">
                Cedar Creek, TX
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {t.locationSection.getDirections}
              </p>
            </a>
          </div>
        </div>

        {/* Info Side */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-8 lg:p-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <div className="mb-12">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                {t.locationSection.subtitle}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-none">
                {t.locationSection.title}
              </h3>
              <div className="w-20 h-1.5 bg-primary mt-6 rounded-full"></div>
            </div>

            <div className="grid gap-8">
              {/* Hours Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                <h4 className="flex items-center gap-3 font-bold text-lg text-gray-900 uppercase mb-6 border-b border-gray-100 pb-4">
                  <span className="material-icons text-primary">schedule</span>
                  {t.locationSection.hours}
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-500">
                      {t.locationSection.monFri}
                    </span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-500">
                      {t.locationSection.sat}
                    </span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                      9:00 AM - 3:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-500">
                      {t.locationSection.sun}
                    </span>
                    <span className="font-bold text-primary bg-red-50 px-3 py-1 rounded-full">
                      {t.locationSection.closed}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Call Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:5122907012"
                  className="flex flex-col items-center justify-center p-6 bg-primary hover:bg-red-700 text-white rounded-2xl transition-all shadow-lg hover:shadow-xl group"
                >
                  <span className="material-icons text-3xl mb-2 group-hover:scale-110 transition-transform">
                    phone_iphone
                  </span>
                  <span className="font-bold uppercase text-xs opacity-90 mb-1">
                    {t.locationSection.callUs}
                  </span>
                  <span className="font-black text-xl tracking-tight">
                    (512) 290-7012
                  </span>
                </a>
                <a
                  href="tel:5122150531"
                  className="flex flex-col items-center justify-center p-6 bg-white text-gray-900 border-2 border-gray-200 hover:border-primary rounded-2xl transition-all group shadow-sm hover:shadow-md"
                >
                  <span className="material-icons text-3xl mb-2 text-gray-400 group-hover:text-primary transition-colors">
                    call
                  </span>
                  <span className="font-bold uppercase text-xs text-gray-500 mb-1">
                    {t.locationSection.callUs}
                  </span>
                  <span className="font-black text-xl tracking-tight">
                    (512) 215-0531
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
