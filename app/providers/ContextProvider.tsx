"use client";
import { useState, createContext, useContext, ReactNode } from "react";

type ValueContextType = {
  done: boolean;
  setDone: (d: boolean) => void;
};

const AnimDoneContext = createContext<ValueContextType | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <AnimDoneContext.Provider value={{ done, setDone }}>
      {children}
    </AnimDoneContext.Provider>
  );
}

export function useAnimDone() {
  const ctx = useContext(AnimDoneContext);
  if (!ctx) {
    throw new Error("useAnimDone must be used within AnimDoneProvider");
  }
  return ctx;
}
