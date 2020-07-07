import React, { useRef, useEffect } from 'react'
import hovereffect from 'hover-effect'
import {gsap} from 'gsap'

import img from '../Stylesheet/Assets/Screenshot 2020-07-03 at 1.13.14 PM.png'
import img2 from '../Stylesheet/Assets/Screenshot 2020-07-03 at 1.14.09 PM.png'
import diss from '../Stylesheet/Assets/heightMap.png'


const AboutMe = () => {
    let hov = useRef(null)
    let dec = useRef(null)
    let quote1 =useRef(null)
    let val = useRef(null)
    let quote2 = useRef(null)
        useEffect(() => {
        new hovereffect({
            parent: hov,
            image1: img,
            image2: img2,
            displacementImage: diss
        });
       gsap.from(dec,{duration:1,y:"10",delay:0,opacity:"0"})
       gsap.from(quote1,{duration:1,y:"10",delay:0.5,opacity:"0"})
       gsap.from(val,{duration:1,y:"10",delay:1.5,opacity:"0"})
       gsap.from(quote2,{duration:1,y:"10",delay:2,opacity:"0"})
       gsap.from(hov,{duration:1,x:"50", delay:2.5,opacity:"0"})
    }, [])

    return (
        <div className="about-me">
            <div style={{"padding":"10px"}} className="abt-text">
                <h2 ref={el=>dec=el}><span style={{ "color": "purple" }}>Const</span> Olanrewaju =</h2>
                
                <div ref={el=>val=el} style={{"paddingLeft":"20px"}}>
                <p>I like to work closely with design teams to transform their design right donw
                to the last pixel. Daily you will find me using modern frontend technologies
                that bring creative design to life just as deigners intended them to be
                    </p>
                <p>
                    You can get in touch with me via <br></br><a id="email" href="mailto:larry_coal@outlook.com">email</a>
                </p>
                </div>
                
            </div>
            <div className="abt-img">
                <div ref={el => hov = el}>

                </div>
            </div>
        </div>
    )
}

export default AboutMe