import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqGroups } from "@/data/faqs";
import { useEffect } from "react";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function FaqPage() {
  useEffect(() => {
    document.title = "FAQ | Queen City Precious Metals";
  }, []);

  return (
    <MainLayout>
      <HeroSection
        headline="Frequently Asked Questions"
        subheadline="Find answers to common questions about our buying process, events, and what we buy."
        centered
      />

      <SectionWrapper navy className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto bg-navy-dark p-6 md:p-12 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          <FaqAccordion groups={faqGroups} />
        </div>
      </SectionWrapper>

      <CtaSection
        headline="Still Have Questions?"
        body="If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </MainLayout>
  );
}
