import { motion} from "framer-motion";

export default function About() {

  return (
    <motion.div className="about-container"
    initial={{scale: 0.75, opacity: 0.5}}
    whileInView={{scale: 1, opacity: 1}}
    viewport={{ once: true, amount: 0.5}}
    transition={{ ease: "easeOut", duration: 0.7 }}>
      <div className="about-header"
       >Über mich</div>
      <div className="about-text"
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
      </div>
    </motion.div>
  );
}
