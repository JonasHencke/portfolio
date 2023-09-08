import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about-container">
      <motion.div className="about-header"
       initial={{x:-100}}
       whileInView={{x: 0}}
       viewport={{once: true}}
       transition={{ ease: "easeOut", duration: 1.3 }}>Über mich</motion.div>
      <motion.div className="about-text"
      initial={{x:100}}
      whileInView={{x: 0}}
      viewport={{once: true}}
      transition={{ ease: "easeOut", duration: 1 }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy.<br/> no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </motion.div>
    </div>
  );
}
