import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-black tracking-tighter text-kente-gold">
                TOUR GHANA
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the warmth, rhythm, and colors of West Africa with our
              curated tours and unforgettable adventures.
            </p>
            <div className="pt-4 flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-white hover:text-kente-gold transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                to="/guide"
                className="text-white hover:text-kente-gold transition-colors font-medium"
              >
                Travel Guide
              </Link>
              <Link
                to="/faq"
                className="text-white hover:text-kente-gold transition-colors font-medium"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-light">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Tour Ghana. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
