import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export function Header() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("ThemeContext not found");
  const { theme, toggleTheme } = themeContext;

  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found");
  const { language, setLanguage } = languageContext;

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{language === "ko" ? "내 웹사이트" : "My Website"}</h1>
      <div>
        <button onClick={toggleTheme} style={{ marginRight: "1rem" }}>
          {theme === "light"
            ? language === "ko" ? "다크 모드" : "Dark Mode"
            : language === "ko" ? "라이트 모드" : "Light Mode"}
        </button>
        <button onClick={toggleLanguage}>
          {language === "ko" ? "영어로" : "한국어로"}
        </button>
      </div>
    </header>
  );
}
