import React, { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "ja" | "en";
type Ctx = { lang: Lang; toggleLang: () => void };

const LangCtx = createContext<Ctx>({ lang: "ja", toggleLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ja");
  const toggleLang = () => setLang(p => (p === "ja" ? "en" : "ja"));
  return <LangCtx.Provider value={{ lang, toggleLang }}>{children}</LangCtx.Provider>;
};

export const useLang = () => useContext(LangCtx);
