import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";

export default function Navbar() {
  const { theme } = useContext<ThemeContextType>(ThemeContext)
  return (
    <motion.nav
      className={`${theme}-navbar navbar`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <a href="#hero">
        <p data-to-scrollspy-id="hero" className={`${theme}-navbar-link`}>Start</p>
      </a>
      <a href="#about">
        <p data-to-scrollspy-id="about" className={`${theme}-navbar-link`}>Über mich</p>
      </a>
      <a href="#projects">
        <p data-to-scrollspy-id="projects" className={`${theme}-navbar-link`}>Projekte</p>
      </a>
      <a href="#skills">
        <p data-to-scrollspy-id="skills" className={`${theme}-navbar-link`}>Skills</p>
      </a>
      <a href="#contact">
        <p data-to-scrollspy-id="contact" className={`${theme}-navbar-link`}>Kontakt</p>
      </a>
    </motion.nav>
  );
}
