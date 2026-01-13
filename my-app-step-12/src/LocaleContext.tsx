import { createContext, useContext, useState, type ReactNode } from "react";

type Locale = "ja" | "en";

type LocaleContextType = {
  locale: Locale;
  toggle: () => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "ja",
  toggle: () => {},
});

export const useLocale = (): LocaleContextType => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within <LocaleProvider>");
  }
  return ctx;
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("ja");
  const toggle = () => setLocale((l) => (l === "ja" ? "en" : "ja"));
  const value: LocaleContextType = { locale, toggle };
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
