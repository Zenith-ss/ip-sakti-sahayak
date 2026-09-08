"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Jurisdiction = "India" | "Global";
export type Language = "en" | "hi" | "ta";

interface AppContextType {
  jurisdiction: Jurisdiction;
  setJurisdiction: (j: Jurisdiction) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>("India");
  const [language, setLanguage] = useState<Language>("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        jurisdiction,
        setJurisdiction,
        language,
        setLanguage,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
