import { MainLayout } from "@/components/layout/MainLayout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { CategoryCard } from "@/components/sections/CategoryCard";
import { EventCard } from "@/components/sections/EventCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { categories, featuredBrands } from "@/data/categories";
import { events } from "@/data/events";
import { faqGroups } from "@/data/faqs";
import { Shield, Clock, MapPin, BadgeCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <MainLayout>
      <SEO
        title="We Buy Gold, Coins, Bullion & Luxury Watches"
        description="Sell gold jewelry, coins, bullion, Rolex, Cartier, Breitling, and luxury watches to Queen City Precious Metals. Professional valuations at scheduled buying events across the Charlotte region."
        canonical="/"
      />
      <HeroSection
        eyebrow="Charlotte's Trusted Precious Metals & Luxury Watch Buyer"
        headline="Queen City Precious Metals"
        subheadline="We pay cash on the spot for gold, silver, coins, bullion, Rolex, Cartier, Breitling, and luxury watches. No waiting. No checks."
        primaryCta={{ label: "View Upcoming Events", href: "/events" }}
        secondaryCta={{ label: "See What We Buy", href: "/what-we-buy" }}
        badges={["Free Evaluations", "Immediate Payment", "No Pressure", "Expert Appraisers"]}
        imageSrc="/images/hero.png"
      />

      {/* Featured Brands Banner */}
      <div className="bg-gold py-6 border-y border-gold-light">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-navy-dark font-bold text-sm md:text-base opacity-80">
            {featuredBrands.map((brand, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-navy/30 mx-2">•</span>}
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionWrapper navy>
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">What We Buy</h2>
          <GoldDivider className="mb-6" />
          <p className="text-white/70 text-lg">
            We focus on precious metals, coins, bullion, jewelry, and premium watches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm italic">
            *We do not buy playing cards or general antiques.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Looking to Sell a Rolex, Cartier, Breitling, or Gold Jewelry?
            </h2>
            <GoldDivider align="left" className="mb-6" />
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Some of the most common items we buy include luxury watches, gold chains, bullion, collectible coins, and estate jewelry. If it has precious metal value or recognized luxury brand value, it may qualify.
            </p>
            <Link 
              href="/contact"
              className="inline-flex bg-white text-navy-dark hover:bg-white/90 px-8 py-4 rounded font-bold transition-all shadow-lg"
            >
              Ask About Your Item
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/luxury-watches.png" alt="Luxury watches" className="rounded-lg shadow-xl w-full h-48 object-cover border border-white/10" />
            <img src="/images/gold-jewelry.png" alt="Gold jewelry" className="rounded-lg shadow-xl w-full h-48 object-cover border border-white/10 mt-8" />
            <img src="/images/bullion.png" alt="Gold bullion" className="rounded-lg shadow-xl w-full h-48 object-cover border border-white/10 -mt-8" />
            <img src="/images/coins.png" alt="Rare coins" className="rounded-lg shadow-xl w-full h-48 object-cover border border-white/10" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper navy className="border-y border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <GoldDivider className="mb-4" />
          <p className="text-gold text-lg font-medium">Simple, clear, and designed to make selling easy.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          {[
            {
              step: "1",
              title: "Find an Event",
              desc: "Browse our upcoming events and choose the location that works best for you.",
              icon: MapPin
            },
            {
              step: "2",
              title: "Bring Your Items In",
              desc: "Bring your gold, coins, bullion, jewelry, or luxury watch for an in-person evaluation.",
              icon: Clock
            },
            {
              step: "3",
              title: "Review Your Offer",
              desc: "Our team evaluates your items and presents a straightforward offer with no pressure.",
              icon: Shield
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center z-10"
            >
              <div className="w-24 h-24 mx-auto bg-navy-dark border-2 border-gold/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(201,164,74,0.15)] relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-navy-dark rounded-full font-bold flex items-center justify-center text-sm border-2 border-navy-dark">
                  {item.step}
                </span>
                <item.icon size={32} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16 pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-white/80 font-medium">
            No confusion. No unnecessary delays. Just a professional process from start to finish.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <GoldDivider align="left" className="mb-6" />
            <p className="text-white/70">
              Meet the Queen City Precious Metals team at one of our upcoming buying events. Bring your items in person for a professional evaluation.
            </p>
          </div>
          <Link href="/events" className="text-gold hover:text-gold-light font-bold shrink-0 flex items-center gap-2">
            View All Events <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-6">
          <EventCard event={events[0]} featured />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {events.slice(1, 3).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper navy>
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            A More Professional Selling Experience
          </h2>
          <GoldDivider className="mb-8" />
          <p className="text-white/70 text-lg leading-relaxed mb-16">
            When people sell gold, jewelry, coins, or luxury watches, they want clarity and confidence. Queen City Precious Metals is built around a straightforward process, category expertise, and local event access that makes it easier to sell valuable items.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Trusted regional buying events",
            "Luxury watch & bullion focus",
            "Transparent evaluations",
            "No-pressure consultations"
          ].map((text, i) => (
            <div key={i} className="bg-navy-dark p-6 rounded-lg border border-white/5 flex flex-col items-center text-center">
              <CheckCircle2 className="text-gold mb-4" size={32} />
              <h4 className="text-white font-bold">{text}</h4>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <GoldDivider className="mb-6" />
          <p className="text-white/70">Common questions about selling to Queen City Precious Metals.</p>
        </div>
        <FaqAccordion groups={[faqGroups[0], faqGroups[2]]} />
        <div className="text-center mt-12">
          <Link href="/faq" className="text-gold hover:text-gold-light font-bold">
            Read all FAQs →
          </Link>
        </div>
      </SectionWrapper>

      <CtaSection
        headline="Have Something to Sell?"
        body="Check our upcoming events or reach out to ask about your item before you visit."
        primaryCta={{ label: "See Upcoming Events", href: "/events" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </MainLayout>
  );
}
