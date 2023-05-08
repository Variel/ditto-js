import React from "react";

export interface DittoItemTransform {
  width: number;
  height: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export interface DittoItemData {
  id: string;
  transform: DittoItemTransform
}

export interface DittoItemsContextType {
  dittoItems: Record<string, DittoItemData>;
  setDittoItems: (dittoItems: Record<string, DittoItemData>) => void;
}

export const DittoItemsContext = React.createContext<DittoItemsContextType | null>(null);