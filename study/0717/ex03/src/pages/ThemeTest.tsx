import Content from "../components/Content";
import ThemeProvider from "../contexts/ThemeContext";
import { Header } from "../components/Header";
import LanguageProvider from "../contexts/LanguageContext";

export default function ThemeTest() {
  return (
    <div>
      <h2>테마,언어변경 테스트</h2>
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Content />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}
