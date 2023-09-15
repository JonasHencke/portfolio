import { motion } from "framer-motion"

export default function Navbar() {
    return(
            <motion.nav className="navbar"
            initial={{ y: -100, opacity: 0}}
            animate = {{y: 0, opacity: 1}}
            transition={{ ease: "easeOut", duration: 0.6 }}>
                <a href="#about">Über mich</a>
                <a href="#projects">Projekte</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Kontakt</a>
            </motion.nav>
    )
}