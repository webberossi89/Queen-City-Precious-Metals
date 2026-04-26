import { MainLayout } from "@/components/layout/MainLayout";
import { SEO } from "@/components/SEO";
import { Schema, buildBreadcrumb } from "@/components/Schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { EventCard } from "@/components/sections/EventCard";
import { events } from "@/data/events";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <MainLayout>
      <SEO
        title="Upcoming Events"
        description="Find upcoming Queen City Precious Metals buying events near Charlotte, NC. Bring your gold, coins, bullion, jewelry, or luxury watches for a free, no-obligation valuation."
        canonical="/events"
      />
      <Schema
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />
      <HeroSection
        headline="Upcoming Buying Events"
        subheadline="Find an upcoming Queen City Precious Metals event near you and bring your items for an in-person evaluation."
        centered
      />

      <SectionWrapper navy className="py-12 md:py-20">
        {events.length > 0 ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            {events.map((event) => (
              <EventCard key={event.id} event={event} featured={event.featured} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 max-w-lg mx-auto">
            <div className="w-20 h-20 mx-auto bg-navy-dark border border-gold/30 rounded-full flex items-center justify-center mb-6">
              <Calendar size={36} className="text-gold" />
            </div>
            <h2 className="font-serif text-3xl text-white mb-4">Events Coming Soon</h2>
            <GoldDivider className="mb-6 mx-auto" />
            <p className="text-white/70 text-lg">
              Check back soon for upcoming show dates and appearances across the Charlotte region.
            </p>
          </div>
        )}
      </SectionWrapper>

      <CtaSection
        headline="Have questions before you attend?"
        body="Reach out to ask about what we buy, confirm event details, or ask whether a specific item qualifies."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </MainLayout>
  );
}
