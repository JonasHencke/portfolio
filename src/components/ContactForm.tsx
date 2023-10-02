import { useRef, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

interface ContactUsProps {
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
export const ContactUs = (props: ContactUsProps) => {
  const { theme } = useContext<ThemeContextType>(ThemeContext)
  const form = useRef<HTMLFormElement>(null);

  function addNotification(message: string) {
    const id = Math.floor(Math.random() * 500)
    const newNote = { id: id, message: message };
    props.setNotifications([...props.notifications, newNote]);
  }

  function mailSuccess() {
    addNotification("✅ E-Mail erfolgreich versandt! ");
  }

  function mailFail() {
    addNotification("❌ E-Mail konnte nicht versandt werden");
  }

  function resetContactForm() {
    (document.getElementById("contact-form") as HTMLFormElement).reset();
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbxn6gm",
        "template_45givuk",
        e.currentTarget,
        "h12ZDsqnnyJy872s_"
      )
      .then(
        (result) => {
          mailSuccess();
          console.log(result)
        },
        (error) => {
          mailFail();
          console.log(error)
        }
      );
      resetContactForm();
  };

  return (
    <>
      <motion.form
        ref={form}
        id="contact-form"
        onSubmit={sendEmail}
        className={`${theme}-contact-form contact-form`}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <input
          type="text"
          name="user_name"
          className="contact-form-name"
          placeholder="Ihr Name"
          required
        />
        <input
          type="email"
          name="user_email"
          className="contact-form-mail"
          placeholder="Ihre E-Mail"
          required
        />
        <textarea
          name="message"
          className="contact-form-message"
          placeholder="Ihre Nachricht"
          required
        />
        <input type="submit" value="Send" className="contact-form-button" />
      </motion.form>
    </>
  );
};
