import "./App.sass";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollSpy from "react-ui-scrollspy";
import Notifications from "./components/Notifications";
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState<
    { id: number; message: string }[]
  >([]);
  return (
    <div>
      <Notifications notifications={notifications} />
      <Navbar />
      <ScrollSpy
        activeClass="ss-active-demo-2"
        scrollThrottle={50}
        useBoxMethod={true}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </ScrollSpy>
    </div>
  );
}

export default App;
