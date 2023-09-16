import { motion } from "framer-motion";
import logo from "../assets/letter-j-svgrepo-com.svg"

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <a href="#hero">
        <p data-to-scrollspy-id="hero">Home</p>
      </a>
      <a href="#about">
        <p data-to-scrollspy-id="about">Über mich</p>
      </a>
      <a href="#projects">
        <p data-to-scrollspy-id="projects">Projekte</p>
      </a>
      <a href="#skills">
        <p data-to-scrollspy-id="skills">Skills</p>
      </a>
      <a href="#contact">
        <p data-to-scrollspy-id="contact">Kontakt</p>
      </a>
    </motion.nav>
  );
}
