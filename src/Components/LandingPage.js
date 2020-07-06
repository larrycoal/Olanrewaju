import React, { useEffect, useRef,useState } from 'react'
import { TweenMax, Power3 } from 'gsap/dist/gsap'
import CSSPlugin from 'gsap/CSSPlugin'
import Intro from './intro'
import ChatBot from './Bot'

const C = CSSPlugin;
const LandingPage = () => {
    const [view, setView]=useState(false)
    let logo = useRef(null)
    let logo1 = useRef(null)
    let logo2 = useRef(null)
    let logo3 = useRef(null)
    let main = useRef(null)
    let bot =useRef(null)
    let env =useRef(null)
    useEffect(() => {
        TweenMax.from(logo,1,{yPercent:-100,repeat:-1,yoyo:true})
        TweenMax.from(logo1,1.5,{opacity:0,x:-10,delay:2.5})
        TweenMax.from(logo2,2,{opacity:0,x:-20,delay:3})
        TweenMax.from(logo3,2.5,{opacity:0,x:-30,delay:3.5})
        TweenMax.from(main,1,{opacity:0,y:-20,delay:2} )
    }, [])

    useEffect (()=>{
        if(view){
            TweenMax.to(env,{display:"none"})
            TweenMax.to(bot,1,{display:"inline",delay:.5,ease:Power3.easeIn})
        }
    },[view])
    
    return (
        <div className="dark-mode">
            <div ref={el=>logo=el}className="name">
                <Intro />
            </div>

            <div className="subtext" >
                <p ref={el => main = el}>I AM A FRONTEND WEBDEVELOPER PASSIONATE ABOUT BRINGING <br />BEAUTIFUL DESIGN TO LIFE.
                    EXPLORE MY PORTFOLIO
                </p>
            </div>
            <div>
                <a ref={el => logo1 = el}href="https://res.cloudinary.com/dbdrtuscd/raw/upload/v1593531207/OlayiwolaOlanrewaju_cv_aobv1f.docx">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
               View CV
             </a>
                <a ref={el => logo2 = el}href="https://github.com/larrycoal">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                GITHUB
            </a>
                <a ref={el => logo3 = el}href="https://www.linkedin.com/in/olanrewaju-olayiwola-a8055812a/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                 LINKEDIN
            </a>
            </div>
            <div className="bot">
                <div ref={el=>bot=el}  style={{"display":"none","opacity":"0"}}>
                < ChatBot/>
                </div>
               <i ref={el=>env=el} onClick={()=>setView(!view)} className="fa fa-envelope" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default LandingPage