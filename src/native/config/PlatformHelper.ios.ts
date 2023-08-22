import type { BaseItemAnimator } from "recyclerlistview";
import type React from "react";
import type { ScrollViewProps } from "react-native";

const PlatformConfig = {
  defaultDrawDistance: 250,
  invertedTransformStyle: { transform: [{ scaleY: -1 }] },
  invertedTransformStyleHorizontal: { transform: [{ scaleX: -1 }] },
};
const getCellContainerPlatformStyles = (
  inverted: boolean,
  parentProps: { x: number; y: number; isHorizontal?: boolean }
): { transform: string; WebkitTransform: string } | undefined => {
  return undefined;
};

const getItemAnimator = (): BaseItemAnimator | undefined => {
  return undefined;
};

const getFooterContainer = (): React.ComponentClass | undefined => {
  return undefined;
};

const getBidirectionalScrollView = (
  experimentalScrollPositionManagement: boolean,
  renderScrollComponent:
    | React.FC<ScrollViewProps>
    | React.ComponentType<ScrollViewProps>
    | undefined
) => {
  return undefined;
};

export {
  PlatformConfig,
  getCellContainerPlatformStyles,
  getItemAnimator,
  getFooterContainer,
  getBidirectionalScrollView,
};
