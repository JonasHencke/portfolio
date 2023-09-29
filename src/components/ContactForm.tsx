import { useRef } from "react";
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
  const form = useRef();

  function addNotification(message: string) {
    const newNote = { id: Math.floor(Math.random() * 500), message: message };
    props.setNotifications([...props.notifications, newNote]);
  }

  function removeNotification() {
    props.setNotifications(
      props.notifications.slice(1, props.notifications.length)
    );
  }

  function mailSuccess() {
    addNotification("E-Mail erfolgreich versandt! ✅");
    setTimeout(removeNotification, 6000);
  }

  function mailFail() {
    addNotification("E-Mail konnte nicht versandt werden ❌");
    setTimeout(removeNotification, 6000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbxn6gm",
        "template_45givuk",
        form.current,
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
  };

  return (
    <>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
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
        />
        <input
          type="email"
          name="user_email"
          className="contact-form-mail"
          placeholder="Ihre E-Mail"
        />
        <textarea
          name="message"
          className="contact-form-message"
          placeholder="Ihre Nachricht"
        />
        <input type="submit" value="Send" className="contact-form-button" />
      </motion.form>
    </>
  );
};
