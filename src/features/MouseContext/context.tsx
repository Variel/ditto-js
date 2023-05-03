import React from "react";

export interface MouseContextType {
  x: number;
  y: number;
  isDown: boolean;
  setPosition: (position: { x: number; y: number }) => void,
  setIsDown: (isDown: boolean) => void,
}

export const MouseContext = React.createContext<MouseContextType | null>(null);
