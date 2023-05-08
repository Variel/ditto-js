import React from "react";

export interface Position {
  x: number;
  y: number;
}

export type Handle = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'right' | 'rotate' | 'body';

export interface MouseContextType {
  position: Position;
  downPosition: Position | undefined;
  pressedHandle: Handle | undefined;
  setPosition: (position: Position) => void;
  setDownPosition: (position: Position | undefined) => void;
  setPressedHandle: (handle: Handle | undefined) => void;
}

export const MouseContext = React.createContext<MouseContextType | null>(null);
