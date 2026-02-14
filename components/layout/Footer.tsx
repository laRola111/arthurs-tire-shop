import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
            <p className="text-gray-500 text-sm max-w-sm">
              Cedar Creek's premier destination for tires, wheels, and
              automotive care. We pride ourselves on honest work and competitive
              pricing.
            </p>
          </div>

          <div>
            <h5 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
              Contact
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
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2023 Arthur's Tire Shop. All rights reserved.</p>
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
        </div>
      </div>
    </footer>
  );
}
