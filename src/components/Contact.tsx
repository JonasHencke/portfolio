import { ContactUs } from "./ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";
import github from "../assets/github-142-svgrepo-com.svg";
import telegram from "../assets/telegram-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import gmail from "../assets/gmail-svgrepo-com (1).svg";
import xing from "../assets/xing-svgrepo-com.svg";

interface ContactProps {
  notifications: { id: number; message: string }[];
  setNotifications: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        message: string;
      }[]
    >
  >;
}

export default function Contact(props: ContactProps) {
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
          Ihrer Nachricht. Auf diese Weise können Sie mich schnellstmöglich
          erreichen. <br />
          Ansonsten gelangen Sie mit den Links zu den aufgeführten Plattformen
          auf mein Profil und haben die Möglichkeit, mich dort zu kontaktieren.
          Ich freue mich von Ihnen zu hören.
        </div>
      </motion.div>
      <div className="contact-flex-container">
        <ContactUs
          setNotifications={props.setNotifications}
          notifications={props.notifications}
        />
        <motion.div
          className={`${theme}-socials-container socials-container`}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <a
            href="https://github.com/JonasHencke"
            className={`${theme}-social-link`}
          >
            <img alt="GitHub icon" src={github}></img>
            <div>GitHub</div>
          </a>
          <a href="https://www.linkedin.com/in/jonas-hencke-451b46294/" className={`${theme}-social-link`}>
            <img alt="LinkedIn icon" src={linkedin}></img>
            <div>LinkedIn</div>
          </a>
          <a href="https://www.xing.com/profile/Jonas_Hencke/cv" className={`${theme}-social-link`}>
            <img alt="Xing icon" src={xing}></img>
            <div>Xing</div>
          </a>
          <a href="https://t.me/JonasHencke" className={`${theme}-social-link`}>
            <img alt="Telegram icon" src={telegram}></img>
            <div>Telegram</div>
          </a>
          <a
            href="mailto:henckejonas@googlemail.com"
            className={`${theme}-social-link`}
          >
            <img alt="Mail icon" src={gmail}></img>
            <div>E-Mail</div>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
