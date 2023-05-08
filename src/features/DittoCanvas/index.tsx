import { ReactNode, useRef } from "react";
import { MouseContextProvider } from "../MouseContext/provider";
import { useMouseMovementTarget } from "../MouseContext/hooks";
import { DittoItem } from "../DittoItem";
import { HandleContextProvider } from "../HandleContext/provider";
import { HandlePortal } from "../Handle/HandlePortal";

import "./index.scss";
import { DittoItemsContextProvider } from "../DittoItemsContext/provider";

interface DittoCanvasProps {
  children?: ReactNode;
}

const DittoCanvasInner: React.FC<DittoCanvasProps> = ({ children }) => {
  const { targetProps } = useMouseMovementTarget();

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
