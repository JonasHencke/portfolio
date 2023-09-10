import { motion } from "framer-motion";
import WetterApp from "../assets/Wetter-app.png";
import CVGenerator from "../assets/CV-generator.png";
import BookNook from "../assets/BookNook.png";
import githubSVG from "../assets/github-142-svgrepo-com.svg";
import livepageSVG from "../assets/website-webpage-url-domain-svgrepo-com.svg";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">Projekte</div>
      <div className="projects-text">
        Eine Auswahl meiner Projekte. <br/> Über die Buttons
        gelangt man zur Live-Version oder zur jeweiligen GitHub repository, in
        welcher der Quellcode und die Beschreibung eingesehen werden kann.
      </div>
      <div className="project-container">
        <img src={BookNook} className="project-image"></img>
        <div className="project-button-container">
          <div className="project-button">
            <img src={livepageSVG}></img>
          </div>
          <div className="project-button">
            <img src={githubSVG}></img>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-button-container">
          <div className="project-button">
            <img src={livepageSVG}></img>
          </div>
          <div className="project-button">
            <img src={githubSVG}></img>
          </div>
        </div>
        <img src={WetterApp} className="project-image"></img>
      </div>
      <div className="project-container">
        <img src={CVGenerator} className="project-image"></img>
        <div className="project-button-container">
          <div className="project-button">
            <img src={livepageSVG}></img>
          </div>
          <div className="project-button">
            <img src={githubSVG}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
