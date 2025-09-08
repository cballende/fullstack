import { useContext } from "react";
import { ThemeContext } from "../../hooks/theme-context";
import "./Header.css";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={`header ${theme}`}>
      <h2 className="header-title" id="header-title">Mi Portafolio Ayacucho 2025</h2>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
      </button>
    </header>
  );
};

export default Header;