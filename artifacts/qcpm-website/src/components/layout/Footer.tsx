import { Link } from "wouter";
import { navLinks, businessInfo } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-white leading-none">
                  QUEEN CITY
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase mt-1">
                  Precious Metals
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {businessInfo.description}
            </p>
            <Link
              href="/events"
              className="inline-block text-gold hover:text-gold-light font-bold text-sm underline underline-offset-4 decoration-gold/30 hover:decoration-gold transition-colors"
            >
              See Upcoming Buying Events →
            </Link>
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
