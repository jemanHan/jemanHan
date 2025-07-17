// 언어 변경 시스템

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. 타입 정의
type Language = "ko" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

// 2. Context 생성
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. Provider 컴포넌트
export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
