import React, { useEffect, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap'
import Intro from './intro'

const LandingPage = () => {

    let logo = useRef(null)
    let main = useRef(null)
    useEffect(() => {
        TweenLite.from(logo,1.5, { css: { opacity: 0 }, ease: Power3.easeIn, delay: 3.5 })
        TweenLite.from(main,1, { css: { opacity: "0" },y:-100, ease: Power3.easeIn, delay: 2 })

    }, [])
    return (
        <div className="dark-mode">
            <div ref={el => logo = el} className="name">
                <Intro />
            </div>

            <div className="subtext" >
                <p ref={el => main = el}>I AM A FRONTEND WEBDEVELOPER PASSIONATE ABOUT BRINGING <br />BEATIFUL DESIGN TO LIFE.
                    EXPLORE MY PORTFOLIO
                </p>
            </div>
            <div ref={el => logo = el}>
                <a href="https://res.cloudinary.com/dbdrtuscd/raw/upload/v1593531207/OlayiwolaOlanrewaju_cv_aobv1f.docx">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
               View CV
             </a>
                <a href="https://github.com/larrycoal">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                GITHUB
            </a>
                <a href="https://www.linkedin.com/in/olanrewaju-olayiwola-a8055812a/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                 LINKEDIN
            </a>
            </div>
        </div>
    )
}

export default LandingPage