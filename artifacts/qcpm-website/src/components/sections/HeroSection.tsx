import { Link } from "wouter";
import { motion } from "framer-motion";
import { GoldDivider } from "@/components/ui/GoldDivider";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badges?: string[];
  imageSrc?: string;
  imageAlt?: string;
  centered?: boolean;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badges,
  imageSrc,
  imageAlt = "Hero image",
  centered = false,
}: HeroSectionProps) {
  const isInternal = centered && !imageSrc;

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

      {isInternal && eyebrow && <GoldDivider className="mb-6" animated={false} />}
      {isInternal && !eyebrow && <GoldDivider className="mb-6 my-2" animated={false} />}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`font-serif ${isInternal ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-7xl'} font-bold text-white mb-6 leading-tight`}
      >
        {headline}
      </motion.h1>

      {subheadline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 font-light max-w-xl"
        >
          {subheadline}
        </motion.p>
      )}

      {badges && badges.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <span className="text-gold font-bold text-base leading-none">✓</span>
              {badge}
            </span>
          ))}
        </motion.div>
      )}

      {(primaryCta || secondaryCta) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className={`flex flex-col sm:flex-row gap-4 ${centered ? "justify-center" : ""}`}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="bg-gold hover:bg-gold-light text-[#081128] px-8 py-4 rounded font-bold text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wide"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="bg-transparent border border-gold/40 hover:border-gold text-white/80 hover:text-gold px-8 py-4 rounded font-semibold text-center transition-all tracking-wide"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      )}
    </div>
  );

  return (
    <section className={`relative overflow-hidden bg-navy-dark ${isInternal ? 'pt-24 pb-16 md:pt-32 md:pb-20' : 'pt-12 pb-24 md:pt-20 md:pb-32'}`}>
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
                className="w-full h-[400px] lg:h-[560px] object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
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
