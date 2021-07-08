import React from "react";
import { Flip ,Slide} from "react-reveal";

const AboutMe = () => {


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
            <Slide left cascade>
            I like to work closely with design teams to transform their design
            right down to the last pixel. Daily you will find me using modern
            frontend technologies that bring creative design to life just as
            deigners intended them to be
            </Slide>
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
              <img src="https://res.cloudinary.com/dbdrtuscd/image/upload/v1606239414/lanre1_q2it41.png" alt="olayiwola olanrewaju pic"/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
