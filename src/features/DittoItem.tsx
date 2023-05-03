import { ReactNode } from "react";
import { Handle } from "./Handle";

interface DittoItemProps {
  children: ReactNode;
}

export const DittoItem: React.FC<DittoItemProps> = ({ children }) => {
  return (
    <div>
      <Handle />
      {children}
    </div>
  );
};
