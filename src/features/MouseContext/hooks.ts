import { MouseEventHandler, useContext } from "react";
import { MouseContext } from "./context";

export const useMouseMovementTarget = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useMouseMovement must be used within a MouseProvider");

  const { setPosition, setDownPosition, setPressedHandle } = context;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetX });
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setDownPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetX });
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    setDownPosition(undefined);
    setPressedHandle(undefined);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setDownPosition(undefined);
    setPressedHandle(undefined);
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

export const usePressHandle = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useHandleSelector must be used within a MouseProvider");

  const { setPressedHandle } = context;

  return setPressedHandle;
}

export const useMouseState = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useMouseState must be used within a MouseProvider");

  const { position, downPosition, pressedHandle } = context;

  return { position, downPosition, pressedHandle };
}