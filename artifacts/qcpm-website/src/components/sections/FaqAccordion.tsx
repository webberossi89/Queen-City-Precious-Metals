import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqGroup } from "@/types";

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {groups.map((group) => (
        <div key={group.id}>
          <h3 className="font-serif text-2xl font-bold text-gold mb-4">{group.label}</h3>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {group.faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-navy-light border border-white/10 rounded-lg px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-gold text-left font-bold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
