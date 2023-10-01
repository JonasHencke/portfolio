import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../App";

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <motion.button
      className={`${theme}-themeswitch`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >🎚️</motion.button>
  );
}
