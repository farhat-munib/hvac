import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import OfferBanner from "@/components/OfferBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <Testimonials />
        <OfferBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
