import { motion } from "framer-motion";
import profilePicture from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-image-container">
        <motion.img
          src={profilePicture}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{type: "spring", duration: 1 }}
        />
      </div>
      <motion.div
        className="hero-fullname"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        Jonas Hencke
      </motion.div>
      <motion.div
        className="hero-title"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        Frontend-Entwickler
      </motion.div>
      <motion.div
        className="hero-description"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.9 }}
      >
        Begeistert von gutem Design und modernen Technologien. Mit viel Neugier
        und dem Ziel lebenslang zu lernen.
      </motion.div>
      <a href="#about" className="hero-button-container">
      <motion.button
        className="hero-button"
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
       Mehr Infos ↓
        
      </motion.button>
      </a>
    </section>
  );
}
