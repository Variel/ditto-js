import { createPortal } from "react-dom";
import { useHandlePortalRef } from "../HandleContext/hooks";
import "./index.scss";
import { useDittoItemTransform } from "../DittoItemsContext/hooks";
import { usePressHandle } from "../MouseContext/hooks";

interface HandleProps {
  id: string;
}

export const Handle: React.FC<HandleProps> = ({ id }) => {
  const { current: portal } = useHandlePortalRef();
  const transform = useDittoItemTransform(id);
  const pressHandle = usePressHandle();

  if (!portal) return null;

  const node = (
    <div className="ditto__handle" style={{
      width: transform?.width ?? 100,
      height: transform?.height ?? 100,
      transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px) rotate(${transform?.rotation ?? 0}deg) scale(${transform?.scale ?? 1})`,
    }}>
      <div className="ditto__handle__body" onMouseDown={() => pressHandle('body')}></div>
      <div className="ditto__handle__top" onMouseDown={() => pressHandle('top')}></div>
      <div className="ditto__handle__right" onMouseDown={() => pressHandle('right')}></div>
      <div className="ditto__handle__bottom" onMouseDown={() => pressHandle('bottom')}></div>
      <div className="ditto__handle__left" onMouseDown={() => pressHandle('left')}></div>
      <div className="ditto__handle__top-left" onMouseDown={() => pressHandle('topLeft')}></div>
      <div className="ditto__handle__top-right" onMouseDown={() => pressHandle('topRight')}></div>
      <div className="ditto__handle__bottom-left" onMouseDown={() => pressHandle('bottomLeft')}></div>
      <div className="ditto__handle__bottom-right" onMouseDown={() => pressHandle('bottomRight')}></div>
      <div className="ditto__handle__rotate" onMouseDown={() => pressHandle('rotate')}></div>
    </div>
  );

  return createPortal(node, portal);
};
