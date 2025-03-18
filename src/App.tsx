import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import SkillsMarquee from "./components/SkillsMarquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#09090B]">
        <div className="max-w-9xl mx-auto">
          <Header />
          <SkillsMarquee />
          <Projects />
          <Contact />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
