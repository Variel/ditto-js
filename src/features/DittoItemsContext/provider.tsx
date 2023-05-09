import { ReactNode, useMemo, useState } from "react";
import { DittoItemsContext, DittoItemsContextType } from "./context";

export const DittoItemsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [dittoItems, setDittoItems] = useState<DittoItemsContextType["dittoItems"]>({});

  const value = useMemo(() => ({
    dittoItems,
    setDittoItems,
    selectedItem,
    selectItem: setSelectedItem
  }), [dittoItems, setDittoItems, selectedItem, setSelectedItem]);

  return (
    <DittoItemsContext.Provider value={value}>
      {children}
    </DittoItemsContext.Provider>
  );
};