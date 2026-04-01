import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-navy text-white selection:bg-gold/30">
      <Header />
      <main className="flex-1 flex flex-col pt-[88px] md:pt-[104px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
