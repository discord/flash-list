import React from "react";

import { FlashListProps } from "./FlashListProps";
import { RecyclerView as FlashList } from "./recyclerview/RecyclerView";

type MasonryFlashListType = <T>(props: FlashListProps<T>) => React.JSX.Element;
const MasonryFlashListV2 = ((
  props: React.JSX.IntrinsicAttributes & FlashListProps<unknown>
) => {
  return <FlashList {...props} masonry />;
}) as MasonryFlashListType;

export { MasonryFlashListV2 };
