import { MainLayout } from "@/components/layout/MainLayout";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { SEO } from "@/components/SEO";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { blogPosts } from "@/data/blog";
import { Link, useParams } from "wouter";
import { Calendar, ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <MainLayout>
        <SectionWrapper navy className="py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-3xl text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-white/70 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </SectionWrapper>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {post && (
        <SEO
          title={post.title}
          description={post.excerpt}
          canonical={`/blog/${post.slug}`}
        />
      )}
      <SectionWrapper navy className="py-12 md:py-20">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-white/50 text-sm mb-4">
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

          <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">
            {post.title}
          </h1>
          <GoldDivider align="left" className="mb-8" />

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl mb-8 border border-white/10"
            />
          )}

          <div
            className="prose prose-invert prose-gold max-w-none text-white/80 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </SectionWrapper>
    </MainLayout>
  );
}
