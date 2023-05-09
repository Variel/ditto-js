import { useEffect, useMemo, useRef, useState } from "react";
import { Handle, MouseContext, MouseContextType, Position } from "./context";

export const MouseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const positionRef = useRef<Position | undefined>(undefined);
  const prevPositionRef = useRef<Position | undefined>(undefined);
  const positionDiffRef = useRef<Position | undefined>(undefined);
  const pressedHandleRef = useRef<Handle | undefined>(undefined);
  const [, _updatePosition] = useState({});

  const value = useMemo<MouseContextType>(
    () => ({
      positionRef,
      prevPositionRef,
      positionDiffRef,
      pressedHandleRef,
      updatePosition: () => _updatePosition({}),
    }),
    [prevPositionRef, positionDiffRef, pressedHandleRef, _updatePosition]
  );

  // FIXME: debugging purposes only
  useEffect(() => {
    console.log(value.positionDiffRef.current);
  }, [value]);

  return (
    <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
  );
};
