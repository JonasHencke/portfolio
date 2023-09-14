import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="user_name" className="contact-form-name" placeholder="Ihr Name"/>
      <input type="email" name="user_email" className="contact-form-mail" placeholder="Ihre E-Mail"/>
      <textarea name="message" className="contact-form-message" placeholder="Ihre Nachricht"/>
      <input type="submit" value="Send" className="contact-form-button"/>
    </form>
  );
};
