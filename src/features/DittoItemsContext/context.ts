import React from "react";
import { Size, Transform } from "../../types/transform";

export interface DittoItemData {
  id: string;
  transform: Transform,
  minSize?: Size
}

export interface DittoItemsContextType {
  dittoItems: Record<string, DittoItemData>;
  setDittoItems: (dittoItems: Record<string, DittoItemData>) => void;
  selectedItem : string | undefined;
  selectItem: (id: string | undefined) => void;
}

export const DittoItemsContext = React.createContext<DittoItemsContextType | null>(null);