import React from "react";

interface HandleContextType {
  handlePortalRef: React.RefObject<HTMLDivElement>;
}

export const HandleContext = React.createContext<HandleContextType | null>(null);