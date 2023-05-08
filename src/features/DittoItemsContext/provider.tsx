import { ReactNode, useMemo, useState } from "react";
import { DittoItemsContext, DittoItemsContextType } from "./context";

export const DittoItemsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dittoItems, setDittoItems] = useState<DittoItemsContextType["dittoItems"]>({});

  const value = useMemo(() => ({
    dittoItems,
    setDittoItems
  }), [dittoItems, setDittoItems]);

  return (
    <DittoItemsContext.Provider value={value}>
      {children}
    </DittoItemsContext.Provider>
  );
};