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
  let bgClass = "bg-navy";
  if (dark) bgClass = "bg-navy-dark";
  if (navy) bgClass = "bg-navy-light";

  return (
    <section id={id} className={`py-20 md:py-32 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
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
