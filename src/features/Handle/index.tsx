import { createPortal } from "react-dom";
import { useHandlePortalRef } from "../HandleContext/hooks"

export const Handle: React.FC = () => {
  const {current: element} = useHandlePortalRef();

  if (!element) return null;

  return createPortal(<>asdf</>, element);
}