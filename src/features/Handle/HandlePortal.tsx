import { useHandlePortalRef } from "../HandleContext/hooks";

export const HandlePortal: React.FC = () => {
  const handlePortalRef = useHandlePortalRef();
  return <div ref={handlePortalRef}></div>;
};
