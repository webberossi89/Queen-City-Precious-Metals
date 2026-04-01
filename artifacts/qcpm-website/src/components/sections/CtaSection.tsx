import { Link } from "wouter";
import { motion } from "framer-motion";

interface CtaSectionProps {
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CtaSection({ headline, body, primaryCta, secondaryCta }: CtaSectionProps) {
  return (
    <section className="py-24 bg-gold relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-navy-dark/5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.05 }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-dark mb-6">
            {headline}
          </h2>
          <p className="text-navy-dark/80 text-lg mb-10 max-w-2xl mx-auto">
            {body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCta.href}
              className="bg-navy-dark hover:bg-navy text-white px-8 py-4 rounded font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="bg-transparent border border-navy-dark/30 hover:border-navy-dark text-navy-dark px-8 py-4 rounded font-bold transition-all"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
