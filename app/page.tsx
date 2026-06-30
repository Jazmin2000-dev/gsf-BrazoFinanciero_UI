import { Navigation } from "@/components/gsf/navigation";
import { HeroSection } from "@/components/gsf/hero-section";
import { CredibilitySection } from "@/components/gsf/credibility-section";
import { SofomSection } from "@/components/gsf/sofom-section";
import { ModelsSection } from "@/components/gsf/models-section";
import { ProcessSection } from "@/components/gsf/process-section";
import { CasosUsoSection } from "@/components/gsf/casos-uso-section";
import { FaqSection } from "@/components/gsf/faq-section";
import { ContactSection } from "@/components/gsf/contact-section";
import { FooterSection } from "@/components/gsf/footer-section";
import { AnimatedParticles } from "@/components/gsf/animated-particles";
import {CreditoSection} from "@/components/gsf/credito-section"; 
import {SofomConcepto} from "@/components/gsf/sofom-concepto"; 
import {BienestarFinancieroSection} from "@/components/gsf/bienestar-financiero-section";
import { SectoresSection } from "@/components/gsf/sectores-section";
import { IndustriaSection } from "@/components/gsf/industria-section";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedParticles />
      <Navigation />
      <HeroSection />
      <CredibilitySection />
      <CreditoSection />
      <SofomConcepto />
      <CasosUsoSection />
      <BienestarFinancieroSection />
      <SofomSection /> 
      <IndustriaSection />   
      <ContactSection />
      <FooterSection />
    </main>
  );
}
