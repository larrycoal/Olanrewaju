import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flip } from "react-reveal";
import SwiperCore, { EffectCube } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectCube]);

const AboutMe = () => {
  let settings = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  };

  return (
    <div className="about-me">
      <div style={{ padding: "10px" }} className="abt-text">
        <h2 style={{fontSize:"2.6rem"}}>
          <Flip left cascade>
            About Me
          </Flip>
        </h2>

        <div style={{ paddingLeft: "20px" }}>
          <p>
            "I like to work closely with design teams to transform their design
            right down to the last pixel. Daily you will find me using modern
            frontend technologies that bring creative design to life just as
            deigners intended them to be"
          </p>
          <p>
            You can get in touch with me via
            <br></br>
            <a id="email" href="mailto:larry_coal@outlook.com">
              email
            </a>
          </p>
        </div>
      </div>
      <div className="about-image-wrapper">
        <div className="about-image-container">
          <Swiper {...settings}>
            <SwiperSlide>
              <div id="image"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
