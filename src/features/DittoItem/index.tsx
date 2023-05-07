import { ReactNode, useState } from "react";
import { Handle } from "../Handle";
import { v4 as uuid } from "uuid";
import "./index.scss";

interface DittoItemProps {
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
  children: ReactNode;
}

export const DittoItem: React.FC<DittoItemProps> = ({
  children,
  defaultWidth,
  defaultHeight,
  defaultX,
  defaultY,
}) => {
  const [id] = useState(uuid());

  return (
    <div
      className="ditto__item"
      style={{
        width: defaultWidth ?? 100,
        height: defaultHeight ?? 100,
        left: defaultX ?? 0,
        top: defaultY ?? 0,
      }}
    >
      <Handle id={id} />
      {children}
    </div>
  );
};
