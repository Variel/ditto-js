import { useEffect, useMemo, useState } from "react";
import { MouseContext, MouseContextType, Position } from "./context";

export const MouseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [downPosition, setDownPosition] = useState<Position | undefined>(
    undefined
  );

  const value = useMemo<MouseContextType>(
    () => ({
      position,
      downPosition,
      setPosition,
      setDownPosition,
    }),
    [position, downPosition, setPosition, setDownPosition]
  );

  // FIXME: debugging purposes only
  useEffect(() => {
    console.log("features\\MouseContext\\provider.tsx", value);
  }, [value]);

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  );
};
