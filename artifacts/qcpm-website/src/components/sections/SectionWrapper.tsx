import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  navy?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  dark,
  navy,
}: SectionWrapperProps) {
  let bgClass = "bg-navy relative overflow-hidden";
  if (dark) bgClass = "bg-navy-dark relative overflow-hidden";
  if (navy) bgClass = "bg-navy-light relative overflow-hidden";

  return (
    <section id={id} className={`py-20 md:py-32 ${bgClass} ${className}`}>
      {/* Subtle texture/gradient overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C9A44A 0%, transparent 70%)', backgroundSize: '100% 100%' }}></div>
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
