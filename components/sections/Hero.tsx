import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 clip-slant-bottom pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1580273916550-e323be2ebdd9?q=80&w=2070&auto=format&fit=crop"
          alt="High performance car wheel close up in dark garage"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent dark:from-black dark:via-black/90 dark:to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
              Open Now • Hablamos Español
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight mb-6 drop-shadow-lg">
            Professional, <br />
            <span className="text-primary">Friendly</span> & Reliable <br />
            Tire Service
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl">
            Serving Cedar Creek with expert tire installation, window tinting,
            and repairs. We keep you rolling safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent-yellow hover:bg-yellow-400 text-black font-black py-4 px-8 rounded text-lg uppercase tracking-wide transform hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] flex items-center justify-center gap-2 group cursor-pointer">
              Get a Free Quote
              <span className="material-icons group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <Link
              href="#location"
              className="bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white font-bold py-4 px-8 rounded text-lg uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-icons">directions</span>
              Visit Shop
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-icons text-primary">verified</span>
              <span className="text-sm font-semibold uppercase">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-primary">thumb_up</span>
              <span className="text-sm font-semibold uppercase">
                Top Rated Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
