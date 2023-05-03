import { ReactNode, useRef } from "react";
import { MouseContextProvider } from "./MouseContext/provider";
import { useMouseMovement } from "./MouseContext/hooks";
import { DittoItem } from "./DittoItem";
import { HandleContextProvider } from "./HandleContext/provider";
import { HandlePortal } from "./Handle/HandlePortal";

interface DittoCanvasProps {
  children?: ReactNode;
}

const DittoCanvasInner: React.FC<DittoCanvasProps> = ({ children }) => {
  const { targetProps } = useMouseMovement();

  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={canvasRef}
      {...targetProps}
      style={{
        width: "100%",
        height: "100%",
        userSelect: "none",
      }}
    >
      <HandlePortal />
      <DittoItem>DittoCanvas</DittoItem>
    </div>
  );
};

export const DittoCanvas: React.FC<DittoCanvasProps> = ({ children }) => {
  return (
    <MouseContextProvider>
      <HandleContextProvider>
      <DittoCanvasInner>{children}</DittoCanvasInner>
      </HandleContextProvider>
    </MouseContextProvider>
  );
};
