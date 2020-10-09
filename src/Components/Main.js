import React from "react";
import { Element } from "react-scroll";

import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Projects from "./Project";

const Main = () => {
  return (
    <div>
      <Element name="landingPage">
        <LandingPage />
      </Element>
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
};

export default Main;
