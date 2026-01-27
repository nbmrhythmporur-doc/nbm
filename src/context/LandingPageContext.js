"use client"
import { createContext, useContext, useState } from "react";

const LandingPageContext = createContext(false);

export function LandingPageProvider({ children }) {
  const [isLandingPage, setIsLandingPage] = useState(false);

  return (
    <LandingPageContext.Provider value={{ isLandingPage, setIsLandingPage }}>
      {children}
    </LandingPageContext.Provider>
  );
}

export function useLandingPage() {
  return useContext(LandingPageContext);
}