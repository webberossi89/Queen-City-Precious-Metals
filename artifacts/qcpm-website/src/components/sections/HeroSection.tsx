import { Link } from "wouter";
import { motion } from "framer-motion";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  centered?: boolean;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  body,
  primaryCta,
  secondaryCta,
  bullets,
  imageSrc,
  imageAlt = "Hero image",
  centered = false,
}: HeroSectionProps) {
  const contentNode = (
    <div className={`flex flex-col ${centered ? "items-center text-center mx-auto max-w-4xl" : ""}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gold uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 block"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl/tight font-bold text-white mb-6"
      >
        {headline}
      </motion.h1>
      {subheadline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-light"
        >
          {subheadline}
        </motion.p>
      )}
      {body && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base text-white/70 leading-relaxed mb-8"
        >
          {body}
        </motion.p>
      )}

      {bullets && bullets.length > 0 && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`space-y-3 mb-10 ${centered ? "text-left mx-auto inline-block" : ""}`}
        >
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-center gap-3 text-white/90">
              <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </motion.ul>
      )}

      {(primaryCta || secondaryCta) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`flex flex-col sm:flex-row gap-4 ${centered ? "justify-center" : ""}`}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="bg-gold hover:bg-gold-light text-navy-dark px-8 py-4 rounded font-bold text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="bg-transparent border border-gold/50 hover:border-gold text-white hover:text-gold px-8 py-4 rounded font-bold text-center transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      )}
    </div>
  );

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-navy-dark">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {imageSrc ? (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {contentNode}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-lg overflow-hidden shadow-2xl border border-white/5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/40 to-transparent z-10" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[400px] lg:h-[600px] object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>
        ) : (
          contentNode
        )}
      </div>
    </section>
  );
}
