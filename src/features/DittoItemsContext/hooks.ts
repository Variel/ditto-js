import { useContext, useEffect } from "react";
import { DittoItemsContext } from "./context";
import { useMouseState } from "../MouseContext/hooks";
import { Size, Transform } from "../../types/transform";

export const useDittoItemTransform = (
  id: string,
  defaultTransform?: Transform,
  minSize?: Size
) => {
  const context = useContext(DittoItemsContext);

  if (!context)
    throw new Error(
      "useDittoItemTransform must be used within a DittoItemsContextProvider"
    );

  const { dittoItems, setDittoItems, selectedItem } = context;

  const dittoItem = dittoItems[id];
  if (!dittoItem) {
    if (defaultTransform) {
      setTimeout(() =>
        setDittoItems({
          ...dittoItems,
          [id]: {
            id,
            transform: defaultTransform,
            minSize,
          },
        })
      );
    }

    return null;
  }

  return dittoItem.transform;
};

export const useDittoItemManipulate = () => {
  const context = useContext(DittoItemsContext);

  if (!context)
    throw new Error(
      "useDittoItemTransform must be used within a DittoItemsContextProvider"
    );

  const mouseState = useMouseState();
  const id = useDittoSelectedItem();
  const { dittoItems, setDittoItems } = context;

  const onMouseMove = () => {
    if (
      !mouseState.positionDiffRef.current ||
      !mouseState.pressedHandleRef.current ||
      !id
    )
      return;

    const radians = -(Math.PI / 180) * dittoItems[id].transform.rotation ?? 0;

    const rotatedX =
      Math.cos(radians) * mouseState.positionDiffRef.current.x -
      Math.sin(radians) * mouseState.positionDiffRef.current.y;
    const rotatedY =
      Math.sin(radians) * mouseState.positionDiffRef.current.x +
      Math.cos(radians) * mouseState.positionDiffRef.current.y;

    switch (mouseState.pressedHandleRef.current) {
      case "body":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              x: dittoItems[id].transform.x + mouseState.positionDiffRef.current.x,
              y: dittoItems[id].transform.y + mouseState.positionDiffRef.current.y,
            },
          },
        });
        break;
      case "bottomRight":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              width: Math.max(
                dittoItems[id].transform.width + rotatedX,
                dittoItems[id].minSize?.width ?? 0
              ),
              height: Math.max(
                dittoItems[id].transform.height + rotatedY,
                dittoItems[id].minSize?.height ?? 0
              ),
            },
          },
        });
        break;
      case "bottom":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              height: Math.max(dittoItems[id].transform.height + rotatedY, dittoItems[id].minSize?.height ?? 0),
            },
          },
        });
        break;
      case "bottomLeft":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              x: dittoItems[id].transform.x + rotatedX,
              width: Math.max(dittoItems[id].transform.width - rotatedX, dittoItems[id].minSize?.width ?? 0),
              height: Math.max(dittoItems[id].transform.height + rotatedY, dittoItems[id].minSize?.height ?? 0),
            },
          },
        });
        break;
      case "left":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              x: dittoItems[id].transform.x + rotatedX,
              width: Math.max(dittoItems[id].transform.width - rotatedX, dittoItems[id].minSize?.width ?? 0),
            },
          },
        });
        break;
      case "right":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              width: Math.max(dittoItems[id].transform.width + rotatedX, dittoItems[id].minSize?.width ?? 0),
            },
          },
        });
        break;
      case "topLeft":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              x: dittoItems[id].transform.x + rotatedX,
              y: dittoItems[id].transform.y + rotatedY,
              width: Math.max(dittoItems[id].transform.width - rotatedX, dittoItems[id].minSize?.width ?? 0),
              height: Math.max(dittoItems[id].transform.height - rotatedY, dittoItems[id].minSize?.height ?? 0),
            },
          },
        });
        break;
      case "top":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              y: dittoItems[id].transform.y + rotatedY,
              height: Math.max(dittoItems[id].transform.height - rotatedY, dittoItems[id].minSize?.height ?? 0),
            },
          },
        });
        break;
      case "topRight":
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              y: dittoItems[id].transform.y + rotatedY,
              width: Math.max(dittoItems[id].transform.width + rotatedX, dittoItems[id].minSize?.width ?? 0),
              height: Math.max(dittoItems[id].transform.height - rotatedY, dittoItems[id].minSize?.height ?? 0),
            },
          },
        });
        break;
      case "rotate": {
        if (mouseState.positionRef.current === undefined) return;

        const center = {
          x: dittoItems[id].transform.x + dittoItems[id].transform.width / 2,
          y: dittoItems[id].transform.y + dittoItems[id].transform.height / 2,
        };
        console.log("center", center);
        console.log("pos", mouseState.positionRef.current);
        const angle = Math.atan2(
          mouseState.positionRef?.current.y - center.y,
          mouseState.positionRef?.current.x - center.x
        );
        setDittoItems({
          ...dittoItems,
          [id]: {
            ...dittoItems[id],
            transform: {
              ...dittoItems[id].transform,
              rotation: (angle * 180) / Math.PI + 90,
            },
          },
        });
        break;
      }
      default:
        break;
    }
  };

  return onMouseMove;
};

export const useDittoSelectItem = () => {
  const context = useContext(DittoItemsContext);

  if (!context)
    throw new Error(
      "useDittoSelectItem must be used within a DittoItemsProvider"
    );

  const { selectItem } = context;

  return selectItem;
};

export const useDittoSelectedItem = () => {
  const context = useContext(DittoItemsContext);

  if (!context)
    throw new Error(
      "useDittoSelectItem must be used within a DittoItemsProvider"
    );

  const { selectedItem } = context;

  return selectedItem;
};
