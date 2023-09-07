import { motion } from "framer-motion"

export default function Navbar() {
    return(
            <motion.nav className="navbar"
            initial={{ y: -200, opacity: 0}}
            animate = {{y: 0, opacity: 1}}
            transition={{ ease: "easeOut", duration: 0.5 }}>
                <div>Über mich</div>
                <div>Projekte</div>
                <div>Skills</div>
                <div>Kontakt</div>
            </motion.nav>
    )
}