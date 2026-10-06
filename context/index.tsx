"use client";
import { SmoothScroll } from "@/component/Animations";

import React, { createContext, Fragment } from "react";

type contextType = {
  user: string;
};

export const Context = createContext<contextType | undefined>(undefined);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // gsap.registerPlugin(SplitText);
  const _values: contextType = { user: "" };

  return (
    <Context.Provider value={_values}>
      <SmoothScroll />
      <Fragment>{children}</Fragment>
    </Context.Provider>
  );
};

export default ContextProvider;
