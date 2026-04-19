import Navbar            from "@/components/Navbar";
import Hero              from "@/components/Hero";
import PainSection       from "@/components/PainSection";
import MethodologySection from "@/components/MethodologySection";
import GuaranteeSection  from "@/components/GuaranteeSection";
import ContactSection    from "@/components/ContactSection";
import Footer            from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainSection />
      <MethodologySection />
      <GuaranteeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
