import React from "react";
import Navigation from "./components/Navigation";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import OrganizationEducation from "./components/OrganizationEducation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ImageZoomProvider } from "./components/ImageZoom";
import { workExperiences } from "./data/workExperience";
import { organizationalExperiences } from "./data/organizationalExperience";
import { educations } from "./data/education";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <ImageZoomProvider>
      <div className="min-h-screen bg-white text-black">
        <Navigation />
        <Hero hasAnimated={hasAnimated} />
        <About hasAnimated={hasAnimated} />
        <ExperienceSection
          id="work-experience"
          title="Work Experience"
          entries={workExperiences}
          hasAnimated={hasAnimated}
          emptyMessage="Add work experience entries in src/data/workExperience.js."
        />
        <OrganizationEducation
          organizationalExperiences={organizationalExperiences}
          educations={educations}
          hasAnimated={hasAnimated}
        />
        <Projects hasAnimated={hasAnimated} />
        <Skills hasAnimated={hasAnimated} />
        <Certifications hasAnimated={hasAnimated} />
        <Contact hasAnimated={hasAnimated} />
        <Footer />
        <ScrollToTop showScrollTop={showScrollTop} />
      </div>
    </ImageZoomProvider>
  );
};

export default App;