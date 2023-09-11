import HTML from "../assets/html-svgrepo-com.svg"
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
            animate("div", { opacity: 1, scale: 1}, { delay: stagger(0.15) })
        }
     }, [isInView])

    return(
            <div className="skills-container">
                <div className="about-header">Skills</div>
                <div className="skills-collection" ref={scope}>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    <div className="skill-emblem">
                        <img src={HTML}></img>
                        <div>HTML</div>
                    </div>
                    
                </div>
            </div>
    )
}