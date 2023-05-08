import { useEffect, useMemo, useState } from "react";
import { Handle, MouseContext, MouseContextType, Position } from "./context";

export const MouseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [downPosition, setDownPosition] = useState<Position | undefined>(
    undefined
  );
  const [pressedHandle, setPressedHandle] = useState<Handle | undefined>(undefined);

  const value = useMemo<MouseContextType>(
    () => ({
      position,
      downPosition,
      pressedHandle,
      setPosition,
      setDownPosition,
      setPressedHandle
    }),
    [position, downPosition, pressedHandle, setPosition, setDownPosition, setPressedHandle]
  );

  // FIXME: debugging purposes only
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  );
};
