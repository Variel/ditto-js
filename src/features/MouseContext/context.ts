import React from "react";

export interface Position {
  x: number;
  y: number;
}

export type Handle = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'right' | 'rotate' | 'body';

export interface MouseContextType {
  positionRef: React.MutableRefObject<Position | undefined>;
  prevPositionRef: React.MutableRefObject<Position | undefined>;
  positionDiffRef: React.MutableRefObject<Position | undefined>;
  pressedHandleRef: React.MutableRefObject<Handle | undefined>;
  updatePosition: () => void;
}

export const MouseContext = React.createContext<MouseContextType | null>(null);
