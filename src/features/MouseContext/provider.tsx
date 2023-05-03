import { useEffect, useMemo, useState } from "react";
import { MouseContext, MouseContextType } from "./context";

export const MouseContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDown, setIsDown] = useState(false);

  const value = useMemo<MouseContextType>(
    () => ({
      ...position,
      isDown,
      setPosition,
      setIsDown,
    }),
    [position, isDown, setPosition, setIsDown]
  );

  // FIXME: debugging purposes only
  useEffect(() => {
    console.log("features\\MouseContext\\provider.tsx", value);
  }, [value])

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  );
};
