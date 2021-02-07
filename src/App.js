import React from "react";
import LandingPage from "./Components/LandingPage";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Project";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

function App() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
