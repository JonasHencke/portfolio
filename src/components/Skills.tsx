import HTML from "../assets/SVGs/html.svg"
import CSS from "../assets/SVGs/css.svg"
import Javascript from "../assets/SVGs/javascript.svg"
import Typescript from "../assets/SVGs/typescript.svg"
import React from "../assets/SVGs/react.svg"
import ReactRouter from "../assets/SVGs/react-router.svg"
import SASS from "../assets/SVGs/sass.svg"
import Webpack from "../assets/SVGs/webpack.svg"
import Git from "../assets/SVGs/git.svg"
import GitHub from "../assets/SVGs/github.svg"
import FramerMotion from "../assets/SVGs/framer-motion.svg"
import Vite from "../assets/SVGs/vite.svg"

import {useAnimate, useInView, stagger} from "framer-motion"
import { useEffect } from "react"

export default function Skills() {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        animate("div", {opacity: 0, scale: 0})
    }, [])

    useEffect(() => {
        if (isInView) {
            animate("div", { opacity: 1, scale: 1}, { delay: stagger(0.1) })
        }
     }, [isInView])

    return(
            <div className="skills-container">
                <div className="skills-header">Skills</div>
                <div className="skills-collection" ref={scope}>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={CSS}></img>
                        <div>CSS</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={Javascript}></img>
                        <div>Javascript</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={Typescript}></img>
                        <div>Typescript</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={React}></img>
                        <div>React</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={ReactRouter}></img>
                        <div>React-Router</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={SASS}></img>
                        <div>SASS</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={Webpack}></img>
                        <div>Webpack</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={Git}></img>
                        <div>Git</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={GitHub}></img>
                        <div>GitHub</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={FramerMotion}></img>
                        <div>Framer Motion</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={Vite}></img>
                        <div>Vite</div>
                    </div>
                    
                </div>
            </div>
    )
}