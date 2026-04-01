import { motion } from "framer-motion";

export function GoldDivider({ 
  className = "", 
  animated = true,
  align = "center"
}: { 
  className?: string, 
  animated?: boolean,
  align?: "left" | "center" | "right"
}) {
  const justifyClass = 
    align === "left" ? "justify-start" : 
    align === "right" ? "justify-end" : "justify-center";

  const content = (
    <div className={`flex items-center ${justifyClass} w-full ${className}`}>
      {align !== "left" && <div className="h-[1px] w-full max-w-[120px] bg-gradient-to-r from-transparent to-gold/50"></div>}
      {align === "left" && <div className="h-[1px] w-full max-w-[120px] bg-gradient-to-r from-gold/50 to-gold/50"></div>}
      <div className="mx-4 text-gold text-xs rotate-45 transform w-2 h-2 border border-gold bg-gold/20 shadow-[0_0_10px_rgba(201,164,74,0.5)] shrink-0"></div>
      {align !== "right" && <div className="h-[1px] w-full max-w-[120px] bg-gradient-to-l from-transparent to-gold/50"></div>}
      {align === "right" && <div className="h-[1px] w-full max-w-[120px] bg-gradient-to-l from-gold/50 to-gold/50"></div>}
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      {content}
    </motion.div>
  );
}