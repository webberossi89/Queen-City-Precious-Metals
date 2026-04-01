import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, businessInfo } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? "bg-navy/90 backdrop-blur-md border-white/5 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center z-50 relative">
            <img
              src="/logo.png"
              alt="Queen City Precious Metals"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  location === link.href
                    ? "text-gold font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                className="text-white/90 hover:text-gold transition-colors text-sm font-bold"
              >
                {businessInfo.phone}
              </a>
              <Link
                href="/events"
                className="bg-gold hover:bg-gold-light text-navy-dark px-5 py-2.5 rounded text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Upcoming Events
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-dark/95 backdrop-blur-xl pt-24 pb-6 px-6 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif border-b border-white/5 pb-4 ${
                    location === link.href ? "text-gold" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-12 flex flex-col gap-4">
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                className="text-center py-4 border border-gold/30 text-gold rounded font-bold"
              >
                Call {businessInfo.phone}
              </a>
              <Link
                href="/events"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gold text-navy-dark text-center py-4 rounded font-bold"
              >
                View Upcoming Events
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
