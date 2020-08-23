import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import{ Flip,Fade,Roll} from 'react-reveal'
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
        <h2>
          <Flip left cascade>
          Const Olanrewaju =
          </Flip>
        </h2>

        <div style={{ paddingLeft: "20px" }}>
          <p>
              <Fade right cascade>
            "I like to work closely with design teams to transform their design
            right donw to the last pixel. Daily you will find me using modern
            frontend technologies that bring creative design to life just as
            deigners intended them to be"
            </Fade>
          </p>
          <p>
            <Fade right cascade>
            You can get in touch with me via 
            </Fade>
            <br></br>
            <a id="email" href="mailto:larry_coal@outlook.com">
              email
            </a>
          </p>
        </div>
      </div>
      <Roll right>
      <div className="about-image-wrapper">
        <div className="about-image-container">
          <Swiper {...settings}>
            <SwiperSlide>
              <div id="image2"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div id="image"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </Roll>
    </div>
  );
};

export default AboutMe;
