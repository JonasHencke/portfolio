import "./App.sass";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollSpy from "react-ui-scrollspy";
import Notifications from "./components/Notifications";
import { useEffect, useState, createContext } from "react";

export interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
const initialContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
}
export const ThemeContext = createContext<ThemeContextType>(initialContext)

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [notifications, setNotifications] = useState<
    { id: number; message: string }[]
  >([]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log("the shit has switched!")
  }, [theme])
  return (
    <div data-theme={theme}>
      <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}>
      <Notifications
        notifications={notifications}
        setNotifications={setNotifications}
      />
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
