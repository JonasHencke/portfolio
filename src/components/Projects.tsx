import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";
import WetterApp from "../assets/Wetter-app.png";
import CVGenerator from "../assets/CV-generator.png";
import BookNook from "../assets/BookNook.png";
import githubSVG from "../assets/github-142-svgrepo-com.svg";
import livepageSVG from "../assets/website-webpage-url-domain-svgrepo-com.svg";

export default function Projects() {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "0.8 1"],
  });
  const scaleProgess = useTransform<unknown, number>(
    scrollYProgress,
    [0, 1],
    [0.5, 1]
  );
  return (
    <section className="projects-container" id="projects">
      <motion.div
        className="project-header-container"
        ref={scrollRef}
        style={{
          scale: scaleProgess,
          opacity: scrollYProgress,
        }}
      >
        <div className="projects-header">Projekte</div>
        <div className="projects-text">
          In diesem Abschnitt finden Sie eine Auswahl meiner bisherigen
          Projekte. Über die Symbole gelangt man zur Live-Version und zu der
          jeweiligen GitHub repository.
          <br />
          Jede GitHub repository enthält neben dem Quellcode auch eine
          detaillierte Beschreibung hinsichtlich der Features, dem verwendeten
          Techstack und der Herangehensweise an das Projekt.
        </div>
      </motion.div>
      <motion.div
        className="project-container"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="project-image-container">
          <div className="project-header">E-commerce Webshop</div>
          <img
            alt="Screenshot von E-commerce Webshop"
            src={BookNook}
            className={`project-image-${theme} project-image`}
          ></img>
        </div>
        <div className="project-button-container">
          <div className="project-button">
            <a href="https://jonashencke.github.io/bookstore/#/">
              <img alt="Link zur E-commerce Livepage" src={livepageSVG}></img>
            </a>
          </div>
          <div className="project-button">
            <a href="https://github.com/JonasHencke/bookstore">
              <img alt="Link zur E-commerce GitHub Seite" src={githubSVG}></img>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="project-container"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="project-button-container">
          <div className="project-button">
            <a href="https://JonasHencke.github.io/weather-app/">
              <img alt="Link zur Wetter-App Livepage" src={livepageSVG}></img>
            </a>
          </div>
          <div className="project-button">
            <a href="https://github.com/JonasHencke/weather-app">
              <img alt="Link zur Wetter App GitHub Seite" src={githubSVG}></img>
            </a>
          </div>
        </div>
        <div className="project-image-container">
          <div className="project-header">Wetter App</div>
          <img
            alt="Screenshot von der Wetter-App"
            src={WetterApp}
            className={`project-image-${theme} project-image`}
          ></img>
        </div>
      </motion.div>
      <motion.div
        className="project-container"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <div className="project-image-container">
          <div className="project-header">Lebenslauf Generator</div>
          <img
            alt="Screenshot vom Lebenslauf Generator"
            src={CVGenerator}
            className={`project-image-${theme} project-image`}
          ></img>
        </div>
        <div className="project-button-container">
          <div className="project-button">
            <a href="https://JonasHencke.github.io/CV-application/">
              <img
                alt="Link zur Lebenslauf Generator Livepage"
                src={livepageSVG}
              ></img>
            </a>
          </div>
          <div className="project-button">
            <a href="https://github.com/JonasHencke/CV-application">
              <img
                alt="Link zur Lebenslauf Generator GitHub Seite"
                src={githubSVG}
              ></img>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
