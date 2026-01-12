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

      {/* Menu - Simplified for now or add actual links */}
      <div className="pointer-events-auto">
        {/* Placeholder for menu items or hamburger */}
      </div>
    </nav>
  );
}
