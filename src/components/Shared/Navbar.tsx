import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={cn(
        "top-0 left-0 right-0 py-6 px-6 md:px-12 flex items-center justify-between text-white mix-blend-difference pointer-events-none transition-all duration-300",
        isHome ? "fixed z-[5]" : "absolute z-50"
      )}
    >
      {/* Logo */}
      <Link to="/" className="pointer-events-auto">
        <span className="text-xl font-black tracking-tighter uppercase text-white">
          TOUR <span className="text-kente-gold">GHANA</span>
        </span>
      </Link>

      {/* Menu */}
      <div className="pointer-events-auto flex items-center space-x-8">
        <Link
          to="/"
          className="text-xs font-bold uppercase tracking-[0.15em] hover:text-kente-gold transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-xs font-bold uppercase tracking-[0.15em] hover:text-kente-gold transition-colors"
        >
          About
        </Link>
        <Link
          to="/guide"
          className="text-xs font-bold uppercase tracking-[0.15em] hover:text-kente-gold transition-colors"
        >
          Guide
        </Link>
        <Link
          to="/faq"
          className="text-xs font-bold uppercase tracking-[0.15em] hover:text-kente-gold transition-colors"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}
