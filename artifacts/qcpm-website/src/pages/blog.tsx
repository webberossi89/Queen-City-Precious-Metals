import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { blogPosts } from "@/data/blog";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {

  return (
    <MainLayout>
      <SEO
        title="Blog"
        description="Precious metals market updates, selling guides, and news from Queen City Precious Metals. Stay informed about gold prices, coin collecting, and luxury watch trends."
        canonical="/blog"
      />
      <HeroSection
        headline="Insights & Updates"
        subheadline="Stay informed with market updates, selling guides, and news from Queen City Precious Metals."
        centered
      />

      <SectionWrapper navy className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-serif text-2xl text-white mb-4">
                Coming Soon
              </h2>
              <GoldDivider className="mb-6 mx-auto" />
              <p className="text-white/70 text-lg max-w-md mx-auto">
                We're working on helpful guides, market insights, and updates.
                Check back soon for our first articles.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="bg-navy-dark border border-white/10 rounded-xl p-6 md:p-8 hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-3 text-white/50 text-sm mb-3">
                      <Calendar size={14} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-gold/60">|</span>
                      <span className="text-gold/80">{post.category}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl text-white group-hover:text-gold transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-white/60 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                      Read more <ArrowRight size={14} />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </MainLayout>
  );
}
