import { ContactUs } from "./ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import github from "../assets/github-142-svgrepo-com.svg";
import telegram from "../assets/telegram-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import gmail from "../assets/gmail-svgrepo-com (1).svg";
import xing from "../assets/xing-svgrepo-com.svg";

export default function Contact() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "0.8 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section className="contact-container" id="contact">
      <motion.div
        className="contact-header-container"
        ref={scrollRef}
        style={{
          scale: scaleProgess,
          opacity: scrollYProgress,
        }}
      >
        <div className="contact-header">Kontakt</div>
        <div className="contact-text">
          Mit dem Ausfüllen und Senden des Formulars erhalte ich eine Mail mit
          Ihrer Nachricht, so können Sie mich schnellstmöglich erreichen.
          Ansonsten können Sie mich auf den aufgeführten Plattformen finden und
          Kontaktieren. Ich freue mich von Ihnen zu hören.
        </div>
      </motion.div>
      <div className="contact-flex-container">
        <ContactUs />
        <motion.div
          className="socials-container"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <a href="https://github.com/jonas-1997" className="social-link">
            <img src={github}></img>
            <div>GitHub</div>
          </a>
          <a href="https://linkedin.com" className="social-link">
            <img src={linkedin}></img>
            <div>LinkedIn</div>
          </a>
          <a href="https://xing.com" className="social-link">
            <img src={xing}></img>
            <div>Xing</div>
          </a>
          <a href="https://gmail.com" className="social-link">
            <img src={gmail}></img>
            <div>E-Mail</div>
          </a>
          <a href="https://telegram.org" className="social-link">
            <img src={telegram}></img>
            <div>Telegram</div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
