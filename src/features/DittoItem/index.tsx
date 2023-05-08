import { ReactNode, useState } from "react";
import { Handle } from "../Handle";
import { v4 as uuid } from "uuid";
import "./index.scss";
import { useDittoItemTransform } from "../DittoItemsContext/hooks";
import { DittoItemTransform } from "../DittoItemsContext/context";

type DittoItemProps = {
  defaultTransform: DittoItemTransform;
  children: ReactNode;
}

export const DittoItem: React.FC<DittoItemProps> = ({
  children,
  defaultTransform
}) => {
  const [id] = useState(uuid());
  
  const transform = useDittoItemTransform(id, defaultTransform);

  return (
    <div
      className="ditto__item"
      style={{
        width: transform?.width ?? 100,
        height: transform?.height ?? 100,
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px) rotate(${transform?.rotation ?? 0}deg) scale(${transform?.scale ?? 1})`,
      }}
    >
      <Handle id={id} />
      {children}
    </div>
  );
};
