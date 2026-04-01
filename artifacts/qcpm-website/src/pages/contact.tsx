import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { businessInfo } from "@/data/navigation";
import { useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  itemType: z.string().min(2, "Item type is required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [location] = useLocation();

  useEffect(() => {
    document.title = "Contact Us | Queen City Precious Metals";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    reset();
  };

  return (
    <MainLayout>
      <HeroSection
        headline="Questions About an Item or Upcoming Event?"
        subheadline="Reach out to Queen City Precious Metals to ask about what we buy, upcoming event details, or whether your item qualifies."
        centered
      />

      <SectionWrapper navy className="py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-white/70 mb-12 text-lg">
              We're here to help. Whether you have a question about a specific item, need details about an upcoming event, or just want to learn more about our process, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-navy-dark border border-gold/30 rounded-full flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Phone</h4>
                  <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`} className="text-white/70 hover:text-gold transition-colors font-medium">
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-navy-dark border border-gold/30 rounded-full flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <a href={`mailto:${businessInfo.email}`} className="text-white/70 hover:text-gold transition-colors font-medium break-all">
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-navy-dark border border-gold/30 rounded-full flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Service Area</h4>
                  <p className="text-white/70 font-medium">
                    {businessInfo.city}, {businessInfo.state} & Surrounding Region<br/>
                    <span className="text-sm font-normal opacity-80">(By appointment and scheduled events)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-dark p-8 md:p-10 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Subtle highlight effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
            
            <h3 className="font-serif text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/90">Full Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`w-full bg-navy border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-gold/50'} transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/90">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full bg-navy border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-gold/50'} transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/90">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`w-full bg-navy border ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-gold/50'} transition-all`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="itemType" className="text-sm font-medium text-white/90">What are you looking to sell?</label>
                <select
                  id="itemType"
                  {...register("itemType")}
                  className={`w-full bg-navy border ${errors.itemType ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.itemType ? 'focus:ring-red-500' : 'focus:ring-gold/50'} transition-all appearance-none`}
                >
                  <option value="">Select an option...</option>
                  <option value="Gold Jewelry">Gold Jewelry</option>
                  <option value="Luxury Watches">Luxury Watches</option>
                  <option value="Coins">Coins & Collections</option>
                  <option value="Bullion">Gold or Silver Bullion</option>
                  <option value="Estate Jewelry">Estate Jewelry</option>
                  <option value="Other">Other / Unsure</option>
                </select>
                {errors.itemType && <p className="text-red-400 text-sm">{errors.itemType.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/90">Additional Details</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={`w-full bg-navy border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-gold/50'} rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-gold/50'} transition-all resize-none`}
                  placeholder="Please describe the item(s) you are interested in selling (brand, condition, etc.)"
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-light text-navy-dark font-bold py-4 rounded transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </MainLayout>
  );
}
