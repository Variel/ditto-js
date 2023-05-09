import { MouseEventHandler, useContext } from "react";
import { Handle, MouseContext } from "./context";

interface UseMouseMovementTargetProps {
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
  onMouseUp?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const useMouseMovementTarget = (callbacks?: UseMouseMovementTargetProps) => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useMouseMovement must be used within a MouseProvider");

  const { positionRef, prevPositionRef, positionDiffRef, pressedHandleRef, updatePosition } = context;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    prevPositionRef.current = positionRef.current;

    const currentPosition = { x: e.pageX, y: e.pageY };

    positionDiffRef.current = {
      x: currentPosition.x - (prevPositionRef.current?.x || 0),
      y: currentPosition.y - (prevPositionRef.current?.y || 0),
    };

    positionRef.current = currentPosition;
    updatePosition();
    callbacks?.onMouseMove?.(e);
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    positionDiffRef.current = { x: 0, y: 0 };
    positionRef.current = { x: e.pageX, y: e.pageY };
    prevPositionRef.current = undefined;
    updatePosition();
    callbacks?.onMouseDown?.(e);
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    positionDiffRef.current = undefined;
    positionRef.current = undefined;
    prevPositionRef.current = undefined;
    pressedHandleRef.current = undefined;
    callbacks?.onMouseUp?.(e);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    positionDiffRef.current = undefined;
    positionRef.current = undefined;
    prevPositionRef.current = undefined;
    pressedHandleRef.current = undefined;
    callbacks?.onMouseLeave?.(e);
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
    throw new Error("usePressHandle must be used within a MouseProvider");

  const { pressedHandleRef } = context;

  return (handle: Handle | undefined) => {
    pressedHandleRef.current = handle;
  };
}

export const usePressedHandle = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("usePressedHandle must be used within a MouseProvider");

  const { pressedHandleRef } = context;

  return pressedHandleRef;
}

export const useMouseState = () => {
  const context = useContext(MouseContext);

  if (!context)
    throw new Error("useMouseState must be used within a MouseProvider");

  const { positionDiffRef, positionRef, prevPositionRef, pressedHandleRef } = context;

  return { positionDiffRef, positionRef, prevPositionRef, pressedHandleRef };
}