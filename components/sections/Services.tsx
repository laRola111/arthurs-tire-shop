"use client";

import { useLanguage } from "@/context/LanguageContext";

const icons = [
  "tire_repair",
  "cached",
  "handyman",
  "straighten",
  "opacity",
  "stars",
  "local_car_wash",
];

const topIcons = [
  "build",
  "cached",
  "handyman",
  "straighten",
  "opacity",
  "stars",
  "local_car_wash",
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200/50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-3">
            {t.services.subtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            {t.services.title}
          </h3>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                index === 6 ? "md:col-span-2 lg:col-span-1 xl:col-span-2" : ""
              }`}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-primary/10 transition-colors duration-300"></div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <span className="material-icons text-6xl text-primary">
                  {topIcons[index]}
                </span>
              </div>

              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                <span className="material-icons text-3xl text-primary group-hover:text-white transition-colors duration-300">
                  {icons[index]}
                </span>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
