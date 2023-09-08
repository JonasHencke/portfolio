import { motion } from "framer-motion";
import profilePicture from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <div className="hero-container">
      <motion.img src={profilePicture}
      initial={{ y: -20}}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      />
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
      <motion.div className="hero-description"
       initial={{ y: 200, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeOut", duration: 0.9 }}
        >
        Begeistert von gutem Design und modernen Technologien. Mit viel Neugier
        und dem Ziel lebenslang zu lernen.
      </motion.div>
      <motion.button className="hero-button"
       initial={{ y: 200, opacity: 0.5 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeOut", duration: 1 }}
       >Mehr Infos ↓</motion.button>
    </div>
  );
}
