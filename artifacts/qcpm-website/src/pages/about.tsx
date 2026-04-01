import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { useEffect } from "react";
import { ShieldCheck, MapPin, Gem, UserCheck, Clock } from "lucide-react";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Queen City Precious Metals";
  }, []);

  return (
    <MainLayout>
      <HeroSection
        headline="A Straightforward, Professional Way to Sell High-Value Items"
        subheadline="Queen City Precious Metals is built on transparency, expertise, and a commitment to providing the best selling experience in the Carolinas."
        centered
      />

      <SectionWrapper navy>
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Our Story</h2>
            <GoldDivider align="left" className="mb-6" />
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Queen City Precious Metals was established to provide an alternative to the typical pawn shop or high-pressure jewelry store experience. We recognized that individuals looking to sell luxury watches, gold jewelry, and fine coin collections needed a more professional, private, and transparent way to transact.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Based in Charlotte, North Carolina, our team brings decades of combined expertise in numismatics, precious metals, and horology. We approach every evaluation with respect for the items and the individuals presenting them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-navy-dark p-8 rounded-lg border border-white/5 shadow-xl hover:border-gold/20 transition-colors">
              <ShieldCheck className="text-gold w-10 h-10 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">Transparency First</h3>
              <p className="text-white/60 leading-relaxed">
                We believe in straightforward evaluations. We explain how we arrive at our offers, taking into account current market values, brand premium, and condition.
              </p>
            </div>
            <div className="bg-navy-dark p-8 rounded-lg border border-white/5 shadow-xl hover:border-gold/20 transition-colors">
              <UserCheck className="text-gold w-10 h-10 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">No Pressure</h3>
              <p className="text-white/60 leading-relaxed">
                Our evaluations are always free, and there is never any pressure to sell. We want you to feel completely comfortable with your decision.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <GoldDivider className="mb-6" />
          <p className="text-white/70 text-lg leading-relaxed">
            We don't buy everything—we focus specifically on high-value categories where our expertise allows us to make the most accurate and competitive offers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury Watches",
              desc: "Specialized knowledge in Rolex, Cartier, Breitling, Omega, and other premium timepieces, acknowledging brand and collector value.",
              icon: Clock
            },
            {
              title: "Precious Metals",
              desc: "Up-to-the-minute market pricing for gold, silver, bullion, bars, and scrap metal based on purity and weight.",
              icon: Gem
            },
            {
              title: "Event-Based Buying",
              desc: "We bring our expertise to you through regional buying events hosted at secure, professional venues across the Carolinas.",
              icon: MapPin
            }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-navy border border-gold/30 rounded-full flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-navy-dark transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        headline="Experience the Difference"
        body="Attend an upcoming event or contact us to discuss the items you're interested in selling."
        primaryCta={{ label: "View Events", href: "/events" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </MainLayout>
  );
}
