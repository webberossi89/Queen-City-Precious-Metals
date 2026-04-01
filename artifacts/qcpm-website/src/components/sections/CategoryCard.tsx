import { Link } from "wouter";
import type { Category } from "@/types";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

export function CategoryCard({ category }: { category: Category }) {
  // @ts-ignore - dynamic icon access
  const IconComponent = Icons[
    category.icon.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("")
  ] || Icons.Gem;

  return (
    <div className="bg-navy-light border border-white/10 rounded-lg p-8 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl group flex flex-col h-full relative overflow-hidden">
      {category.highlighted && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
      )}
      
      <div className="w-12 h-12 rounded-full bg-navy-dark border border-gold/20 flex items-center justify-center mb-6 text-gold relative z-10">
        <IconComponent size={24} strokeWidth={1.5} />
      </div>
      
      <h3 className="font-serif text-xl font-bold text-white mb-3 relative z-10">
        {category.name}
      </h3>
      
      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 relative z-10">
        {category.description}
      </p>
      
      <Link href="/what-we-buy" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-bold transition-colors group/link mt-auto relative z-10">
        View details <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
