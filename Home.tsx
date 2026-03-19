import { Navigation } from "../components/Navigation";
import { ThemeToggle } from "../components/ThemeToggle";
import { ScrollToTop } from "../components/ScrollToTop";
import { DevNotice } from "../components/DevNotice";
import { HeroSection } from "../components/HeroSection";
import { AboutProfessionalFocus } from "../components/AboutProfessionalFocus";
import { DesignPriorities } from "../components/DesignPriorities";
import { TrajectoryMilestones } from "../components/TrajectoryMilestones";
import { TechnicalMatrix } from "../components/TechnicalMatrix";
import { SelectedWorks } from "../components/SelectedWorks";
import { GettingInvolved } from "../components/GettingInvolved";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  return (
    <div className="relative min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
      <DevNotice />
      <Navigation />
      <ThemeToggle />
      <ScrollToTop />
      
      <HeroSection />
      <AboutProfessionalFocus />
      <DesignPriorities />
      <TrajectoryMilestones />
      <TechnicalMatrix />
      <SelectedWorks />
      <GettingInvolved />
      <ContactSection />
    </div>
  );
}