import { ContactUs } from "./ContactForm";
import github from "../assets/github-142-svgrepo-com.svg"
import telegram from "../assets/telegram-svgrepo-com.svg"
import linkedin from "../assets/linkedin-svgrepo-com.svg"
import gmail from "../assets/gmail-svgrepo-com (1).svg"

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="about-header">Kontakt</div>
      <div className="contact-flex-container">
        <ContactUs />
        <div className="socials-container">
            <div className="social-github">
                <img src={github}></img>
                <div>GitHub</div>
            </div>
            <div className="social-linkedin">
                <img src={linkedin}></img>
                <div>LinkedIn</div>
            </div>
            <div className="social-telegram">
                <img src={telegram}></img>
                <div>Telegram</div>
            </div>
            <div className="social-email">
                <img src={gmail}></img>
                <div>E-Mail</div>
            </div>
            <div className="social-email">
                <img src={github}></img>
                <div>placeholder</div>
            </div>
        </div>
      </div>
    </div>
  );
}
