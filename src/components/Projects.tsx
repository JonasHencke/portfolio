import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WetterApp from "../assets/Wetter-app.png";
import CVGenerator from "../assets/CV-generator.png";
import BookNook from "../assets/BookNook.png";
import githubSVG from "../assets/github-142-svgrepo-com.svg";
import livepageSVG from "../assets/website-webpage-url-domain-svgrepo-com.svg";

export default function Projects() {
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
          Eine Auswahl meiner Projekte. <br /> Über die Buttons gelangt man zur
          Live-Version und zu der jeweiligen GitHub repository, in welcher der
          Quellcode und die Beschreibung eingesehen werden kann.
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
          <img src={BookNook} className="project-image"></img>
        </div>
        <div className="project-button-container">
          <div className="project-button">
            <a href="">
              <img src={livepageSVG}></img>
            </a>
          </div>
          <div className="project-button">
            <a href="https://github.com/jonas-1997/bookstore">
              <img src={githubSVG}></img>
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
            <a href="">
              <img src={livepageSVG}></img>
            </a>
          </div>
          <div className="project-button">
            <a href="https://github.com/jonas-1997/weather-app">
              <img src={githubSVG}></img>
            </a>
          </div>
        </div>
        <div className="project-image-container">
          <div className="project-header">Wetter App</div>
          <img src={WetterApp} className="project-image"></img>
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
          <img src={CVGenerator} className="project-image"></img>
        </div>
        <div className="project-button-container">
          <div className="project-button">
            <a href="">
              <img src={livepageSVG}></img>
            </a>
          </div>
          <div className="project-button">
            <a href="https://github.com/jonas-1997/CV-application">
              <img src={githubSVG}></img>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
