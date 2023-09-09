import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ scale: 0.75, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
    >
      <div className="about-header">Über mich</div>
      <div className="about-text">
        Angefangen mit HTML, CSS und Javascript machte ich meine ersten
        Erfahrungen in der Webentwicklung und der Wunsch Programmieren auf
        professioneller Ebene auszuführen, entwickelte sich zügig. Einige Monate
        sind seitdem vergangen und mittlerweile programmiere ich
        leidenschafltich mit dem Javascript-Framework React.<br/><br/>Für meine
        Web-Anwendungen verwende ich Typescript oder Javascript, Context API zum
        managen von State und React-Router zum erstellen komplexer
        Web-Anwendungen. Für das Styling nutze ich gerne den CSS Pre-Processor
        SASS und Animationen auf meinen Seiten erstelle ich über die Framer
        Motion Library.<br/><br/>Für viele weiteren Technologien bin ich offen. Neben
        dem Frontend habe ich auch großes Interesse
        für Technologien im Backend.
      </div>
    </motion.div>
  );
}
