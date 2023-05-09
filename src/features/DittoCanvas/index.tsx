import { ReactNode, useRef } from "react";
import { MouseContextProvider } from "../MouseContext/provider";
import { useMouseMovementTarget, useMouseState, usePressedHandle } from "../MouseContext/hooks";
import { HandleContextProvider } from "../HandleContext/provider";
import { HandlePortal } from "../Handle/HandlePortal";

import "./index.scss";
import { DittoItemsContextProvider } from "../DittoItemsContext/provider";
import { useDittoItemManipulate, useDittoSelectItem } from "../DittoItemsContext/hooks";

interface DittoCanvasProps {
  children?: ReactNode;
}

const DittoCanvasInner: React.FC<DittoCanvasProps> = ({ children }) => {
  const pressedHandle = usePressedHandle();
  const selectItem = useDittoSelectItem();
  const onMouseMove = useDittoItemManipulate();

  const onMouseDownForDeselect = () => {
    if (pressedHandle.current) return;

    selectItem(undefined);
  }

  const { targetProps } = useMouseMovementTarget({
    onMouseDown: onMouseDownForDeselect,
    onMouseMove,
  });

  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="ditto-canvas" ref={canvasRef} {...targetProps}>
      {children}
      <HandlePortal />
    </div>
  );
};

export const DittoCanvas: React.FC<DittoCanvasProps> = ({ children }) => {
  return (
    <MouseContextProvider>
      <HandleContextProvider>
        <DittoItemsContextProvider>
          <DittoCanvasInner>{children}</DittoCanvasInner>
        </DittoItemsContextProvider>
      </HandleContextProvider>
    </MouseContextProvider>
  );
};
