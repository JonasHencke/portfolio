import "./App.sass";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollSpy from "react-ui-scrollspy";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollSpy activeClass="ss-active-demo-2" scrollThrottle={50} useBoxMethod={true}>
        <Hero/>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </ScrollSpy>
    </div>
  );
}

export default App;
