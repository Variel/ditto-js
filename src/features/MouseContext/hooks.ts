import { MouseEventHandler, useContext } from "react";
import { MouseContext } from "./context";

export const useMouseMovement = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useMouseMovement must be used within a MouseProvider");

  const { setPosition, setIsDown } = context;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetX });
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDown(true);
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDown(false);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDown(false);
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
