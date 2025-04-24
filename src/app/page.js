import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import TeamSection from "../components/home/TeamSection";
import DomainesSection from "../components/home/DomainesSection";
import EngagementSection from "../components/home/EngagementSection";

export const metadata = {
  title: "SAR Security | Société de sécurité privée à Genève",
  description:
    "SAR Security est une société de sécurité polyvalente et dynamique basée à Genève en Suisse. Surveillance, garde rapprochée, protection des biens et des personnes.",
  alternates: {
    canonical: "https://sar-security.ch",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <DomainesSection />
      <EngagementSection />
    </>
  );
}
// Test
