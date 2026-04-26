export interface NavLink {
  label: string;
  href: string;
}

export interface Event {
  id: string;
  title: string;
  city: string;
  state: string;
  venue: string;
  address: string;
  startDate: string;
  endDate?: string;
  hours: string;
  description: string;
  categories: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  items: string[];
  icon: string;
  highlighted?: boolean;
  longDescription?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  group: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  faqs: FaqItem[];
}

export interface Brand {
  name: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  featured?: boolean;
}
