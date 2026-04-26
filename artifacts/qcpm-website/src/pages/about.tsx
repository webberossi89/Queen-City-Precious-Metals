import { MainLayout } from "@/components/layout/MainLayout";
import { SEO } from "@/components/SEO";
import { Schema, buildBreadcrumb } from "@/components/Schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { ShieldCheck, MapPin, Gem, UserCheck, Clock } from "lucide-react";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function AboutPage() {
  return (
    <MainLayout>
      <SEO
        title="About Us"
        description="Queen City Precious Metals is a professional precious metals and luxury watch buyer serving Charlotte, NC. Transparent valuations, no-pressure consultations, and expert knowledge."
        canonical="/about"
      />
      <Schema
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
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
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Based in Charlotte, North Carolina, our team brings decades of combined expertise in numismatics, precious metals, and horology. We approach every evaluation with respect for the items and the individuals presenting them.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              We work directly with clients across the Charlotte region and the Carolinas, including individuals selling personal collections, families settling estates, and clients who have outgrown items they no longer wear or use. Our buying events are designed to feel more like a professional consultation than a transaction, because for many clients that is exactly what the moment calls for.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">How an Evaluation Works</h2>
            <GoldDivider align="left" className="mb-6" />
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Every evaluation follows the same process, regardless of the value of the item. We test, weigh, and identify each piece in front of you, and we explain how the offer is calculated. There are no surprises, no high-pressure sales tactics, and no fees of any kind.
            </p>
            <ul className="text-white/70 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>You bring your gold, coins, bullion, jewelry, or luxury watch to a scheduled buying event or contact us to arrange a consultation.</li>
              <li>Each item is tested for purity (acid or XRF for metals), weighed on a calibrated scale, and identified by reference, year, or hallmark as appropriate.</li>
              <li>We explain how the offer is built: live spot price for metal content, market data for collector and luxury watch pieces, and any premium for designer or rare items.</li>
              <li>If you accept, you receive payment on the spot. If you do not, the conversation ends there. There is no obligation, and no follow-up unless you ask for one.</li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-navy-dark p-8 rounded-lg border border-white/5 shadow-xl hover:border-gold/20 transition-colors">
              <ShieldCheck className="text-gold w-10 h-10 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">Transparency First</h3>
              <p className="text-white/60 leading-relaxed">
                We believe in straightforward evaluations. We explain how we arrive at our offers, taking into account current market values, brand premium, and condition. The number you see is the number we will pay.
              </p>
            </div>
            <div className="bg-navy-dark p-8 rounded-lg border border-white/5 shadow-xl hover:border-gold/20 transition-colors">
              <UserCheck className="text-gold w-10 h-10 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-3">No Pressure</h3>
              <p className="text-white/60 leading-relaxed">
                Our evaluations are always free, and there is never any pressure to sell. Take the offer with you and think it over, sell on the spot, or simply decline. We want you to feel completely comfortable with your decision.
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
            We do not buy everything. We focus on high-value categories where our experience allows us to identify, authenticate, and price each item accurately. Specialization is what allows us to make competitive offers across precious metals, fine jewelry, and luxury watches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Luxury Watches",
              desc: "Hands-on knowledge of Rolex, Cartier, Breitling, Patek Philippe, Audemars Piguet, IWC, Omega, and the wider list of brands collectors care about. We evaluate by reference, condition, originality, and complete kit.",
              icon: Clock
            },
            {
              title: "Precious Metals",
              desc: "Live market pricing for gold, silver, platinum, bullion, bars, and scrap metal. Every piece is tested and weighed against the live spot price, with no shortcuts and no flat per-gram quotes.",
              icon: Gem
            },
            {
              title: "Event-Based Buying",
              desc: "Regional buying events at secure, professional venues throughout the Charlotte region and the Carolinas. We bring expertise and live market data to you, with the privacy and pace of a real consultation.",
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

        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Commitment to Clients</h2>
          <GoldDivider className="mb-8" />
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Selling precious metals or a luxury watch is rarely a casual decision. The items often carry sentimental weight, and the dollar values involved are significant. We hold ourselves to a few simple commitments because of that.
            </p>
            <p>
              <strong className="text-white">Honest pricing.</strong> Every offer is built on data we can show you: live spot for metal content, real market comps for luxury watches, and clear premiums for designer or rare items. We do not lowball, and we do not need to. Our business depends on clients who feel respected and return for future events.
            </p>
            <p>
              <strong className="text-white">Privacy and discretion.</strong> Buying events are conducted in a private, professional setting. We do not require ID for an evaluation, and we do not share client information with anyone outside our team. For estate clients in particular, discretion is part of the service.
            </p>
            <p>
              <strong className="text-white">No-pressure consultations.</strong> The evaluation itself is the product. Whether or not you sell, we want you to leave understanding what your items are worth in today's market. If you choose to walk away with a written summary instead of a check, that is a perfectly normal outcome.
            </p>
          </div>
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
