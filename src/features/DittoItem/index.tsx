import { ReactNode, useState } from "react";
import { Handle } from "../Handle";
import { v4 as uuid } from "uuid";
import "./index.scss";
import { useDittoItemTransform, useDittoSelectedItem } from "../DittoItemsContext/hooks";
import { Size, Transform } from "../../types/transform";

type DittoItemProps = {
  defaultTransform: Transform;
  minSize?: Size;
  children: ReactNode;
}

export const DittoItem: React.FC<DittoItemProps> = ({
  children,
  defaultTransform,
  minSize
}) => {
  const [id] = useState(uuid());
  const selectedItem = useDittoSelectedItem();
  
  const transform = useDittoItemTransform(id, defaultTransform, minSize);

  return (
    <div
      className="ditto__item"
      style={{
        width: transform?.width ?? 100,
        height: transform?.height ?? 100,
        minWidth: minSize?.width ?? 0,
        minHeight: minSize?.height ?? 0,
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px) rotate(${transform?.rotation ?? 0}deg) scale(${transform?.scale ?? 1})`,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <Handle id={id} selected={id === selectedItem} />
      {children}
    </div>
  );
};
