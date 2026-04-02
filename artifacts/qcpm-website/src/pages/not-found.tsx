import { MainLayout } from "@/components/layout/MainLayout";
import { SEO } from "@/components/SEO";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <MainLayout>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <SectionWrapper navy className="py-12 md:py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-serif text-5xl text-gold mb-4">404</h1>
          <GoldDivider className="mb-6 mx-auto" />
          <h2 className="font-serif text-2xl text-white mb-4">Page Not Found</h2>
          <p className="text-white/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-6 py-3 rounded transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </SectionWrapper>
    </MainLayout>
  );
}
