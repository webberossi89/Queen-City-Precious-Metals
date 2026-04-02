import type { FaqGroup } from "@/types";

export const faqGroups: FaqGroup[] = [
  {
    id: "what-we-buy",
    label: "What We Buy",
    faqs: [
      {
        id: "what-items",
        question: "What items do you buy?",
        answer:
          "We buy gold jewelry, silver, coins, bullion, bars, estate jewelry, and luxury watches including Rolex, Cartier, Breitling, and other premium brands.",
        group: "what-we-buy",
      },
      {
        id: "antiques-playing-cards",
        question: "Do you buy antiques or playing cards?",
        answer:
          "No. We focus on precious metals, jewelry, coins, bullion, and watches. We do not buy antiques or playing cards.",
        group: "what-we-buy",
      },
      {
        id: "broken-gold",
        question: "Do you buy broken or damaged gold jewelry?",
        answer:
          "Yes. Condition can vary depending on the item and its underlying value. Broken gold jewelry is often still valuable based on its metal content.",
        group: "what-we-buy",
      },
      {
        id: "watch-brands",
        question: "Which watch brands are you interested in?",
        answer:
          "We are especially interested in brands like Rolex, Cartier, and Breitling, along with select other luxury and designer watches. If you have a watch you're unsure about, bring it in or contact us.",
        group: "what-we-buy",
      },
    ],
  },
  {
    id: "how-events-work",
    label: "How Events Work",
    faqs: [
      {
        id: "appointment",
        question: "Do I need an appointment?",
        answer:
          "For most events, you can attend during posted hours without an appointment. Event details will note whether appointments are recommended for a specific location.",
        group: "how-events-work",
      },
      {
        id: "what-to-bring",
        question: "What should I bring to an event?",
        answer:
          "Bring the items you would like evaluated — gold jewelry, coins, watches, bullion, or other precious metals. Having any documentation or original packaging for watches is helpful but not required.",
        group: "how-events-work",
      },
    ],
  },
  {
    id: "evaluations",
    label: "Evaluations and Offers",
    faqs: [
      {
        id: "item-qualifies",
        question: "What if I'm not sure whether my item qualifies?",
        answer:
          "Contact us or bring it to an event. We're happy to review whether it fits our buying categories. There's no cost for an evaluation and no pressure to sell.",
        group: "evaluations",
      },
      {
        id: "payment",
        question: "How do you pay for items?",
        answer:
          "When you accept our offer, you receive payment on the spot. We make the process straightforward — there are no delays, checks, or waiting periods.",
        group: "evaluations",
      },
      {
        id: "no-pressure",
        question: "Do I have to sell if I get an offer?",
        answer:
          "No. Our evaluations are free and there is no pressure to sell. You are welcome to receive an offer and take time to decide, or simply decline.",
        group: "evaluations",
      },
    ],
  },
  {
    id: "watches-jewelry",
    label: "Watches and Jewelry",
    faqs: [
      {
        id: "watch-condition",
        question: "Does condition matter for watches?",
        answer:
          "Yes, condition is a factor in evaluating luxury watches. However, we evaluate all watches — including those that need service. Bring your watch in for an honest assessment.",
        group: "watches-jewelry",
      },
      {
        id: "jewelry-condition",
        question: "What kind of gold jewelry do you accept?",
        answer:
          "We accept most gold jewelry — chains, necklaces, rings, bracelets, earrings, estate pieces, and even broken or scrap gold. Value is primarily determined by weight and purity.",
        group: "watches-jewelry",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact and Appointments",
    faqs: [
      {
        id: "contact-before",
        question: "Can I contact you before attending an event?",
        answer:
          "Yes. You're welcome to reach out before an event to ask about what we buy, confirm event details, or ask whether a specific item qualifies. Use our contact form or call us directly.",
        group: "contact",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);
