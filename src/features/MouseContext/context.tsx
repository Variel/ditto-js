import React from "react";

export interface Position {
  x: number;
  y: number;
}

export interface MouseContextType {
  position: Position;
  downPosition: Position | undefined;
  setPosition: (position: Position) => void;
  setDownPosition: (position: Position | undefined) => void;
}

export const MouseContext = React.createContext<MouseContextType | null>(null);
