import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {EffectCube} from "swiper";
import "swiper/swiper-bundle.css";
import img from '../Stylesheet/Assets/Screenshot 2020-07-03 at 1.13.14 PM.png'
import img2 from '../Stylesheet/Assets/Screenshot 2020-07-03 at 1.14.09 PM.png'
SwiperCore.use([EffectCube]);


const AboutMe = () => {
   
    let settings = {
        effect: 'cube',
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
            
            <div style={{"padding":"10px"}} className="abt-text">
                <h2 ><span style={{ "color": "purple" }}>Const</span> Olanrewaju =</h2>
                
                <div  style={{"paddingLeft":"20px"}}>
                <p>
                    "I like to work closely with design teams to transform their design right donw
                    to the last pixel. Daily you will find me using modern frontend technologies
                    that bring creative design to life just as deigners intended them to be"
                </p>
                <p>
                    You can get in touch with me via <br></br><a id="email" href="mailto:larry_coal@outlook.com">email</a>
                </p>
                </div>
                
            </div>
            <div className="about-image">
                <Swiper {...settings}>
                    <SwiperSlide>
                    <img  src={img} alt="olanrewaju.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img  src={img2} alt="olanrewaju.png"/>
                    </SwiperSlide>
                </Swiper>

            </div>
           
        </div>
    )
}

export default AboutMe