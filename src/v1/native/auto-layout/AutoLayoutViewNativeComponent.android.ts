import { requireNativeComponent } from "react-native";

import type { AutoLayoutViewNativeComponentProps } from "./AutoLayoutViewNativeComponentProps";

const AutoLayoutViewNativeComponent =
  requireNativeComponent<AutoLayoutViewNativeComponentProps>("AutoLayoutView");
export default AutoLayoutViewNativeComponent;
