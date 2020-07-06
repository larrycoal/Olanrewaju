import React, { useRef, useEffect } from 'react'
import hovereffect from 'hover-effect'
import {TweenMax} from 'gsap/dist/gsap'

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
       TweenMax.from(dec,{duration:1,y:"10",delay:0,opacity:"0"})
       TweenMax.from(quote1,{duration:1,y:"10",delay:0.5,opacity:"0"})
       TweenMax.from(val,{duration:1,y:"10",delay:1.5,opacity:"0"})
       TweenMax.from(quote2,{duration:1,y:"10",delay:2,opacity:"0"})
       TweenMax.from(hov,{duration:1,x:"50", delay:2.5,opacity:"0"})
    }, [])

    return (
        <div className="about-me">
            <div style={{"padding":"10px"}} className="abt-text">
                <h2 ref={el=>dec=el}><span style={{ "color": "purple" }}>Const</span> Olanrewaju =</h2>
                <svg ref={el=>quote1=el} width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.496 20.192C3.816 20.192 2.472 19.592 1.464 18.392C0.504 17.144 0.0240002 15.536 0.0240002 13.568C0.0240002 10.88 0.744 8.456 2.184 6.296C3.672 4.088 5.928 2.24 8.952 0.751999L9.744 1.904C8.304 2.768 6.984 3.992 5.784 5.576C4.632 7.112 4.056 8.672 4.056 10.256C4.056 10.688 4.176 11.048 4.416 11.336C4.656 11.576 5.016 11.696 5.496 11.696C6.696 11.696 7.704 12.128 8.52 12.992C9.384 13.808 9.816 14.816 9.816 16.016C9.816 17.216 9.384 18.224 8.52 19.04C7.704 19.808 6.696 20.192 5.496 20.192ZM17.952 20.192C16.272 20.192 14.928 19.592 13.92 18.392C12.96 17.144 12.48 15.536 12.48 13.568C12.48 10.88 13.2 8.456 14.64 6.296C16.128 4.088 18.384 2.24 21.408 0.751999L22.2 1.904C20.76 2.768 19.44 3.992 18.24 5.576C17.088 7.112 16.512 8.672 16.512 10.256C16.512 10.688 16.632 11.048 16.872 11.336C17.112 11.576 17.472 11.696 17.952 11.696C19.152 11.696 20.16 12.128 20.976 12.992C21.84 13.808 22.272 14.816 22.272 16.016C22.272 17.216 21.84 18.224 20.976 19.04C20.16 19.808 19.152 20.192 17.952 20.192Z" fill="white" />
                </svg>
                <div ref={el=>val=el} style={{"paddingLeft":"20px"}}>
                <p>I like to work closely with design teams to transform their design right donw
                to the last pixel. Daily you will find me using modern frontend technologies
                that bring creative design to life just as deigners intended them to be
                    </p>
                <p>
                    You can get in touch with me via <br></br><a id="email" href="mailto:larry_coal@outlook.com">email</a>
                </p>
                </div>
                <svg ref={el=>quote2=el}width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.504 20.192C19.184 20.192 20.528 19.592 21.536 18.392C22.496 17.144 22.976 15.536 22.976 13.568C22.976 10.88 22.256 8.456 20.816 6.296C19.328 4.088 17.072 2.24 14.048 0.751999L13.256 1.904C14.696 2.768 16.016 3.992 17.216 5.576C18.368 7.112 18.944 8.672 18.944 10.256C18.944 10.688 18.824 11.048 18.584 11.336C18.344 11.576 17.984 11.696 17.504 11.696C16.304 11.696 15.296 12.128 14.48 12.992C13.616 13.808 13.184 14.816 13.184 16.016C13.184 17.216 13.616 18.224 14.48 19.04C15.296 19.808 16.304 20.192 17.504 20.192ZM5.048 20.192C6.728 20.192 8.072 19.592 9.08 18.392C10.04 17.144 10.52 15.536 10.52 13.568C10.52 10.88 9.8 8.456 8.36 6.296C6.872 4.088 4.616 2.24 1.592 0.751999L0.799998 1.904C2.24 2.768 3.56 3.992 4.76 5.576C5.912 7.112 6.488 8.672 6.488 10.256C6.488 10.688 6.368 11.048 6.128 11.336C5.888 11.576 5.528 11.696 5.048 11.696C3.848 11.696 2.84 12.128 2.024 12.992C1.16 13.808 0.727999 14.816 0.727999 16.016C0.727999 17.216 1.16 18.224 2.024 19.04C2.84 19.808 3.848 20.192 5.048 20.192Z" fill="white" />
                </svg>
            </div>
            <div className="abt-img">
                <div ref={el => hov = el}>

                </div>
            </div>
        </div>
    )
}

export default AboutMe