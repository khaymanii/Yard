import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PopularListing from "@/components/PopularListing";
import Testimonials from "@/components/Testimonials";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import WhyWhatsApp from "@/components/WhyWhatsapp";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <PopularListing />
      <WhatsAppDemo />
      <WhyWhatsApp />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
