"use client";

import React, { createContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollAnimations, ScrollRefresh } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

type ContextType = {
  user: string;
};

export const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const values: ContextType = {
    user: "",
  };

  return (
    <Context.Provider value={values}>
      <ScrollRefresh />
      <ScrollAnimations />
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
