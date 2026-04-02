import { MainLayout } from "@/components/layout/MainLayout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { EventCard } from "@/components/sections/EventCard";
import { events } from "@/data/events";
import { useState } from "react";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function EventsPage() {

  const [filter, setFilter] = useState("All");
  const cities = ["All", ...new Set(events.map(e => e.city))];

  const filteredEvents = filter === "All" ? events : events.filter(e => e.city === filter);

  return (
    <MainLayout>
      <SEO
        title="Upcoming Events"
        description="Find upcoming Queen City Precious Metals buying events near Charlotte, NC. Bring your gold, coins, bullion, jewelry, or luxury watches for a free, no-obligation valuation."
        canonical="/events"
      />
      <HeroSection
        headline="Upcoming Buying Events"
        subheadline="Find an upcoming Queen City Precious Metals event near you and bring your items for an in-person evaluation."
        centered
      />

      <SectionWrapper navy className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 border-b border-white/5 pb-8">
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl font-bold text-white mb-3">Event Schedule</h2>
            <GoldDivider align="left" animated={false} />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white/60 text-sm font-medium">Filter by City:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map(city => (
                <button
                  key={city}
                  onClick={() => setFilter(city)}
                  className={`px-4 py-2 rounded text-sm font-bold transition-colors ${
                    filter === city
                      ? "bg-gold text-navy-dark"
                      : "bg-navy-dark border border-white/10 text-white hover:border-gold/50"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <EventCard key={event.id} event={event} featured={event.featured} />
            ))
          ) : (
            <div className="text-center py-20 bg-navy-dark rounded-lg border border-white/5">
              <p className="text-white/60 text-lg">No events scheduled for this location currently.</p>
              <button 
                onClick={() => setFilter("All")}
                className="mt-4 text-gold hover:text-gold-light underline underline-offset-4"
              >
                View all events
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>

      <CtaSection
        headline="Have questions before you attend?"
        body="Reach out to ask about what we buy, confirm event details, or ask whether a specific item qualifies."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </MainLayout>
  );
}
