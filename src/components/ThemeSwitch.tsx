import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <motion.button
      className={`${theme}-themeswitch`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >{theme == "light" ? "🌙" : "☀️"}</motion.button>
  );
}
