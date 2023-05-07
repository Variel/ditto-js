import { MouseEventHandler, useContext } from "react";
import { MouseContext } from "./context";

export const useMouseMovementTarget = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useMouseMovement must be used within a MouseProvider");

  const { setPosition, setDownPosition } = context;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetX });
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setDownPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetX });
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    setDownPosition(undefined);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setDownPosition(undefined);
  };

  return {
    targetProps: {
      onMouseMove: handleMouseMove,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
    },
  };
};
