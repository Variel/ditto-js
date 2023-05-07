import { createPortal } from "react-dom";
import { useHandlePortalRef } from "../HandleContext/hooks";
import "./index.scss";

interface HandleProps {
  id: string;
}

export const Handle: React.FC<HandleProps> = ({ id }) => {
  const { current: element } = useHandlePortalRef();

  if (!element) return null;

  return createPortal(
    <div className="ditto__handle">
      <div className="ditto__handle__top"></div>
      <div className="ditto__handle__right"></div>
      <div className="ditto__handle__bottom"></div>
      <div className="ditto__handle__left"></div>
      <div className="ditto__handle__top-left"></div>
      <div className="ditto__handle__top-right"></div>
      <div className="ditto__handle__bottom-left"></div>
      <div className="ditto__handle__bottom-right"></div>
    </div>,
    element
  );
};
