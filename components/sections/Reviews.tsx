"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Carlos M.",
    stars: 5,
    date: "2 weeks ago",
  },
  {
    name: "Sarah Jenkins",
    stars: 5,
    date: "1 month ago",
  },
  {
    name: "Miguel Angel",
    stars: 5,
    date: "3 weeks ago",
  },
];

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            {t.reviews?.title}
          </h2>
          <div className="w-24 h-1.5 bg-accent-yellow mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-500 font-bold uppercase tracking-widest text-sm">
            {t.reviews?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Dark Gray card background
              className="bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorational quotation mark */}
              <div className="absolute top-4 right-6 text-gray-800 text-8xl font-serif opacity-50">
                "
              </div>

              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-icons text-accent-yellow text-xl"
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="text-white text-lg mb-8 italic leading-relaxed font-medium relative z-10">
                "{t.reviews?.items?.[index]?.text || "Great service!"}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-800 pt-6 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-gray-900 shadow-md text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    {review.name}
                  </h4>
                  {/* Yellow verification badge */}
                  <span className="text-xs text-accent-yellow font-black flex items-center gap-1 uppercase tracking-wider mt-0.5">
                    <span className="material-icons text-sm">verified</span>{" "}
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
