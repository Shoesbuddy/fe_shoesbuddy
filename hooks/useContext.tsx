"use client";
import { Context } from "@/context";
import React from "react";

export default function useContext() {
  const _context = React.useContext(Context);
  if (_context === undefined) {
    throw new Error("context must be used within the context provider");
  }
  return _context;
}
