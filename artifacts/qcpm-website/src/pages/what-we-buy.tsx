import { MainLayout } from "@/components/layout/MainLayout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { categories, featuredBrands } from "@/data/categories";
import * as Icons from "lucide-react";
import { Link } from "wouter";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function WhatWeBuyPage() {
  return (
    <MainLayout>
      <SEO
        title="What We Buy"
        description="We buy gold jewelry, silver, coins, bullion, bars, estate jewelry, pocket watches, and luxury watches including Rolex, Cartier, Breitling, Patek Philippe, and more."
        canonical="/what-we-buy"
      />
      <HeroSection
        headline="What We Buy"
        subheadline="Queen City Precious Metals buys precious metals, bullion, coins, estate jewelry, and premium watches."
        centered
      />

      <div className="bg-gold py-4 border-b border-gold-dark">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-navy-dark font-bold text-sm">
            {featuredBrands.map((brand, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-navy/30 mx-2">•</span>}
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionWrapper navy className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-24">
          {categories.map((category, index) => {
            // @ts-ignore
            const IconComponent = Icons[category.icon.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("")] || Icons.Gem;
            const isEven = index % 2 === 0;
            
            return (
              <div key={category.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="bg-navy-dark aspect-square rounded-2xl border border-white/10 flex items-center justify-center p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <IconComponent className="w-full h-full text-gold/20" strokeWidth={0.5} />
                    <IconComponent className="w-16 h-16 text-gold absolute z-10" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h2 className="font-serif text-3xl font-bold text-white mb-4">{category.name}</h2>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="bg-navy-light rounded-lg p-6 border border-white/5 mb-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Icons.CheckCircle2 className="text-gold w-5 h-5" />
                      Examples of what we buy:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                          <span className="text-gold mt-1 text-[10px]">■</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/contact?subject=${encodeURIComponent(`Inquiry about ${category.name}`)}`}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold transition-colors group"
                  >
                    Ask About This Category <Icons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <CtaSection
        headline="Ready for an Evaluation?"
        body="Find an upcoming event near you to bring your items in for a professional, no-pressure evaluation."
        primaryCta={{ label: "Find an Event", href: "/events" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </MainLayout>
  );
}
