import { createPortal } from "react-dom";
import { useHandlePortalRef } from "../HandleContext/hooks";
import "./index.scss";
import {
  useDittoItemTransform,
  useDittoSelectItem,
} from "../DittoItemsContext/hooks";
import { usePressHandle } from "../MouseContext/hooks";
import { useEffect, useState } from "react";

interface HandleProps {
  id: string;
  selected: boolean;
}

export const Handle: React.FC<HandleProps> = ({ id, selected }) => {
  const [active, setActive] = useState(false);
  const selectItem = useDittoSelectItem();

  useEffect(() => {
    !selected && setActive(false);
  }, [selected]);

  const { current: portal } = useHandlePortalRef();
  const transform = useDittoItemTransform(id);
  const pressHandle = usePressHandle();

  if (!portal) return null;

  const node = (
    <div
      className="ditto__handle"
      style={{
        width: transform?.width ?? 100,
        height: transform?.height ?? 100,
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px) rotate(${transform?.rotation ?? 0}deg) scale(${transform?.scale ?? 1})`,
      }}
    >
      {!active && (
        <div
          className="ditto__handle__body"
          onMouseDown={() => {
            selectItem(id);
            pressHandle("body");
          }}
          onDoubleClick={() => {
            console.log('selected:', selected)
            selected && setActive(true);
          }}
        ></div>
      )}
      {selected && (
        <>
          <div
            className="ditto__handle__top"
            onMouseDown={() => pressHandle("top")}
          ></div>
          <div
            className="ditto__handle__right"
            onMouseDown={() => pressHandle("right")}
          ></div>
          <div
            className="ditto__handle__bottom"
            onMouseDown={() => pressHandle("bottom")}
          ></div>
          <div
            className="ditto__handle__left"
            onMouseDown={() => pressHandle("left")}
          ></div>
          <div
            className="ditto__handle__top-left"
            onMouseDown={() => pressHandle("topLeft")}
          ></div>
          <div
            className="ditto__handle__top-right"
            onMouseDown={() => pressHandle("topRight")}
          ></div>
          <div
            className="ditto__handle__bottom-left"
            onMouseDown={() => pressHandle("bottomLeft")}
          ></div>
          <div
            className="ditto__handle__bottom-right"
            onMouseDown={() => pressHandle("bottomRight")}
          ></div>
          <div
            className="ditto__handle__rotate"
            onMouseDown={() => pressHandle("rotate")}
          ></div>
        </>
      )}
    </div>
  );

  return createPortal(node, portal);
};
