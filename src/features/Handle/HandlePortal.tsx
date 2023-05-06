import { useHandlePortalRef } from "../HandleContext/hooks";

import "./handle-portal.scss";

export const HandlePortal: React.FC = () => {
  const handlePortalRef = useHandlePortalRef();
  return <div className="ditto__handle-portal" ref={handlePortalRef}></div>;
};
