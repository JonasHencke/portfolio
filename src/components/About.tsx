import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "0.8 1"],
  });
  const scaleProgess = useTransform<unknown, number>(
    scrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  return (
    <motion.section
      id="about"
      className="about-container"
      ref={scrollRef}
      style={{
        scale: scaleProgess,
        opacity: scrollYProgress,
      }}
    >
      <div className="about-header">Über mich</div>
      <div className="about-text">
        Angefangen mit <span>HTML</span>, <span>CSS</span> und{" "}
        <span>Javascript</span> machte ich meine ersten Erfahrungen in der
        Webentwicklung. Der Wunsch, Programmieren auf professioneller Ebene
        auszuführen, entwickelte sich zügig. Einige Monate sind seitdem
        vergangen und mittlerweile programmiere ich leidenschaftlich Webanwendungen mit dem
        Javascript-Framework <span>React</span>.<br />
        <br />
        Für meine Web-Anwendungen verwende ich <span>Typescript</span> oder{" "}
        <span>Javascript</span>, <span>Context</span> zum Managen von State und{" "}
        <span>React-Router</span> zum Erstellen komplexer Web-Anwendungen. Für
        das Styling nutze ich gerne den CSS Pre-Processor <span>SASS</span> und
        Animationen auf meinen Seiten erstelle ich über die{" "}
        <span>Framer Motion</span> Library.
        <br />
        <br />
        Für viele weitere Technologien bin ich offen. Neben dem Frontend habe
        ich auch großes Interesse für Technologien im Backend. Erfahrungen mit dem
        Backend-as-a-Service Programm <span>Firebase</span> habe ich
        bereits gemacht. Auch habe ich bereits verschiedene <span>APIs</span> in meinen Projekten ausprobiert.
      </div>
    </motion.section>
  );
}
