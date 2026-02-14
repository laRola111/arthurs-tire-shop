"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  // Total frames in the sequence (Reduced for shorter scroll)
  const frameCount = 66;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount]);

  // Preload images into memory
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    const preload = async () => {
      for (let i = 0; i <= frameCount; i++) {
        const paddedIndex = i.toString().padStart(3, "0");
        const src = `/framer/Cinematic_extreme_closeup_202602131303_60fpl_${paddedIndex}.webp`;
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount + 1) {
            setImagesLoaded(true);
          }
        };
        imgs.push(img);
      }
      imagesRef.current = imgs;
    };

    preload();
  }, []);

  // Sync canvas with scroll progress using requestAnimationFrame for smoothness
  useMotionValueEvent(imageIndex, "change", (latest) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let index = Math.round(latest);
    if (index > frameCount) index = frameCount;
    if (index < 0) index = 0;

    const img = imagesRef.current[index];
    if (img) {
      // Draw image to cover canvas (simulating object-cover)
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio,
      );
    }
  });

  // Handle canvas resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger initial draw
        const img = imagesRef.current[0];
        if (img && canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.drawImage(
              img,
              0,
              0,
              img.width,
              img.height,
              centerShift_x,
              centerShift_y,
              img.width * ratio,
              img.height * ratio,
            );
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Canvas Renderer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Loading State or Fallback Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
            <div className="flex flex-col items-center gap-2">
              <span className="text-primary font-bold animate-pulse">
                {t.common.loading}
              </span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
                {t.hero.openNow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight mb-6 drop-shadow-lg"
            >
              {t.hero.titlePart1} <br />
              <span className="text-primary">{t.hero.titlePart2}</span>{" "}
              {t.hero.titlePart3} <br />
              {t.hero.titlePart4}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-accent-yellow hover:bg-yellow-400 text-black font-black py-4 px-8 rounded text-lg uppercase tracking-wide transform hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] flex items-center justify-center gap-2 group cursor-pointer">
                {t.hero.getQuote}
                <span className="material-icons group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <Link
                href="#location"
                className="bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white font-bold py-4 px-8 rounded text-lg uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-icons">directions</span>
                {t.hero.visitShop}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest font-bold">
            {t.hero.scrollExplore}
          </span>
          <span className="material-icons animate-bounce">
            keyboard_arrow_down
          </span>
        </motion.div>
      </div>
    </div>
  );
}
