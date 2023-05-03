import { ReactNode, useMemo, useRef } from "react";
import { HandleContext } from "./context";

export const HandleContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const handlePortalRef = useRef<HTMLDivElement>(null);

  const value = useMemo(
    () => ({
      handlePortalRef,
    }),
    [handlePortalRef]
  );

  return (
    <HandleContext.Provider value={value}>{children}</HandleContext.Provider>
  );
};
