import { Link } from "wouter";
import { navLinks, businessInfo } from "@/data/navigation";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/20 relative overflow-hidden">
      {/* subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, #C9A44A 0%, transparent 70%)', backgroundSize: '100% 100%' }}></div>
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="inline-block mb-8 group">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-wide text-white leading-none group-hover:text-gold transition-colors duration-500">
                  QUEEN CITY
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase mt-2 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-gold"></span> Precious Metals <span className="w-4 h-[1px] bg-gold"></span>
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
              {businessInfo.description}
            </p>
            <div className="flex items-center gap-3 text-gold/80 mb-6 bg-navy/50 px-4 py-2 rounded border border-white/5">
              <ShieldCheck size={20} className="text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider">Fully Insured & Licensed</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white text-lg mb-6">What We Buy</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/what-we-buy" className="text-white/60 hover:text-white transition-colors text-sm">
                  Gold Jewelry & Chains
                </Link>
              </li>
              <li>
                <Link href="/what-we-buy" className="text-white/60 hover:text-white transition-colors text-sm">
                  Luxury Watches (Rolex, Cartier)
                </Link>
              </li>
              <li>
                <Link href="/what-we-buy" className="text-white/60 hover:text-white transition-colors text-sm">
                  Coins & Collections
                </Link>
              </li>
              <li>
                <Link href="/what-we-buy" className="text-white/60 hover:text-white transition-colors text-sm">
                  Gold & Silver Bullion
                </Link>
              </li>
              <li>
                <Link href="/what-we-buy" className="text-white/60 hover:text-white transition-colors text-sm">
                  Estate Jewelry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white text-lg mb-6">Contact Us</h4>
            <address className="not-italic text-sm text-white/60 space-y-4">
              <p>
                <strong className="text-white block mb-1">Phone</strong>
                <a
                  href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-gold transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </p>
              <p>
                <strong className="text-white block mb-1">Email</strong>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {businessInfo.email}
                </a>
              </p>
              <p>
                <strong className="text-white block mb-1">Service Area</strong>
                {businessInfo.city}, {businessInfo.state} & Surrounding Region
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-white/40 hover:text-white text-xs">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
