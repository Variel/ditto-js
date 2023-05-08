import { useContext, useEffect } from "react";
import { DittoItemTransform, DittoItemsContext } from "./context";
import { useMouseState } from "../MouseContext/hooks";

export const useDittoItemTransform = (id: string, defaultTransform?: DittoItemTransform) => {
  const context = useContext(DittoItemsContext);

  if (!context) throw new Error('useDittoItemTransform must be used within a DittoItemsContextProvider');

  const { dittoItems, setDittoItems } = context;

  const mouseState = useMouseState();

  useEffect(() => {
    if (!mouseState.downPosition || !mouseState.pressedHandle) return;

    // TODO: 마우스 움직임에 따른 transform 계산
  }, [mouseState]);

  const dittoItem = dittoItems[id];
  if (!dittoItem) {
    if (defaultTransform) {
      setDittoItems({
        ...dittoItems,
        [id]: {
          id,
          transform: defaultTransform
        }
      });
    }

    return null;
  }

  return dittoItem.transform;
}