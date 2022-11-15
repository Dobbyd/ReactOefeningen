import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    
    const textRef = useRef();

    useEffect(()=>{

        init(textRef.current, {  
            backDelay: 1500,
            showCursor: true,
            strings: ['Front-End Developer', 'Game Designer', 'UX Designer' ] })

    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
            <div className="imgContainer">
                <img src="portfolio/assets/profilepic.png" alt="foto van Maarten Veenstra" />
            </div>

            </div>
            <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Maarten Veenstra</h1>
                <h3>I'm a <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="portfolio/assets/down.png" alt="down arrow"/>
            </a>

            </div>
            
            
        </div>
    )
}
