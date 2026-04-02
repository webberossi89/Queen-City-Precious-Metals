import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const HomePage = lazy(() => import("@/pages/home"));
const WhatWeBuyPage = lazy(() => import("@/pages/what-we-buy"));
const EventsPage = lazy(() => import("@/pages/events"));
const AboutPage = lazy(() => import("@/pages/about"));
const FaqPage = lazy(() => import("@/pages/faq"));
const ContactPage = lazy(() => import("@/pages/contact"));
const BlogPage = lazy(() => import("@/pages/blog"));
const BlogPostPage = lazy(() => import("@/pages/blog-post"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/what-we-buy" component={WhatWeBuyPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
