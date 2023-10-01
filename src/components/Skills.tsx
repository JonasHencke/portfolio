import HTML from "../assets/SVGs/light/html.svg";
import CSS from "../assets/SVGs/light/css.svg";
import Javascript from "../assets/SVGs/light/javascript.svg";
import Typescript from "../assets/SVGs/light/typescript.svg";
import React from "../assets/SVGs/light/react.svg";
import ReactRouter from "../assets/SVGs/light/react-router.svg";
import SASS from "../assets/SVGs/light/sass.svg";
import Webpack from "../assets/SVGs/light/webpack.svg";
import Git from "../assets/SVGs/light/git.svg";
import GitHub from "../assets/SVGs/light/github.svg";
import FramerMotion from "../assets/SVGs/light/framer-motion.svg";
import Vite from "../assets/SVGs/light/vite.svg";
import npm from "../assets/SVGs/light/npm.svg"
import VSCode from "../assets/SVGs/light/vscode.svg"
import HTMLDark from "../assets/SVGs/dark/html.svg"
import CSSDark from "../assets/SVGs/dark/css.svg";
import JavascriptDark from "../assets/SVGs/dark/javascript.svg";
import TypescriptDark from "../assets/SVGs/dark/typescript.svg";
import ReactDark from "../assets/SVGs/dark/react.svg";
import ReactRouterDark from "../assets/SVGs/dark/react-router.svg";
import SASSDark from "../assets/SVGs/dark/sass.svg";
import WebpackDark from "../assets/SVGs/dark/webpack.svg";
import GitDark from "../assets/SVGs/dark/git.svg";
import GitHubDark from "../assets/SVGs/dark/github.svg";
import FramerMotionDark from "../assets/SVGs/dark/framer-motion.svg";
import ViteDark from "../assets/SVGs/dark/vite.svg";
import npmDark from "../assets/SVGs/dark/npm.svg"
import VSCodeDark from "../assets/SVGs/dark/vscode.svg"
import { useEffect, useRef, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";
import {
  motion,
  useAnimate,
  useInView,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";


export default function Skills() {
  const { theme } = useContext<ThemeContextType>(ThemeContext)
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
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
  useEffect(() => {
    animate("div", { opacity: 0, scale: 0 });
  }, []);

  useEffect(() => {
    if (isInView) {
      animate("div", { opacity: 1, scale: 1 }, { delay: stagger(0.07) });
    }
  }, [isInView]);

  return (
    <section className="skills-container" id="skills">
      <motion.div
        className="skills-header-container"
        ref={scrollRef}
        style={{
          scale: scaleProgess,
          opacity: scrollYProgress,
        }}
      >
        <div className="skills-header">Skills</div>
        <div className="skills-description">
          Mit den folgenden Technologien habe ich bereits in meinen Projekten
          gearbeitet:
        </div>
      </motion.div>
      <div className="skills-collection" ref={scope}>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? HTML : HTMLDark}></img>
          <div>HTML</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? CSS : CSSDark}></img>
          <div>CSS</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? Javascript : JavascriptDark}></img>
          <div>Javascript</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? Typescript : TypescriptDark}></img>
          <div>Typescript</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? React : ReactDark}></img>
          <div>React</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? ReactRouter : ReactRouterDark}></img>
          <div>React-Router</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? FramerMotion : FramerMotionDark}></img>
          <div>Framer Motion</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? SASS : SASSDark}></img>
          <div>SASS</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? Vite : ViteDark}></img>
          <div>Vite</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? Webpack : WebpackDark}></img>
          <div>Webpack</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? Git : GitDark}></img>
          <div>Git</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? GitHub : GitHubDark}></img>
          <div>GitHub</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? VSCode : VSCodeDark}></img>
          <div>VSCode</div>
        </div>
        <div className={`${theme}-emblem skill-emblem`}>
          <img src={theme == "light" ? npm : npmDark}></img>
          <div>npm</div>
        </div>
      </div>
    </section>
  );
}
