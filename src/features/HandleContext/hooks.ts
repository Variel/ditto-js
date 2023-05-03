import { useContext } from "react";
import { HandleContext } from "./context";

export const useHandlePortalRef = () => {
  const context = useContext(HandleContext);

  if (!context)
    throw new Error("useHandlePortal must be used within a HandleContextProvider");

  return context.handlePortalRef;
};
