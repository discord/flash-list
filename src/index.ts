// This is a temporary compatibility layer between FlashList v1(1.7.2) and v2(2.2.0), so that we can use v2 on new arch iOS and v1 elsewhere
// We need to have this here because v1 version of FlashList is highly incompatible with new arch iOS, while v2 is only compatible with new arch.
// We will get rid of this file and v1/v2 folders, as soon as we end iOS new arch migration.

import { Platform } from "react-native";

import { isNewArch } from "./v2/src/isNewArch";
// v1
import { FlashList as FlashListV1 } from "./v1/index";
import { FlashListProps as FlashListPropsV1 } from "./v1/FlashListProps";
import {
  useBenchmark as useBenchmarkV1,
  BenchmarkParams as BenchmarkParamsV1,
  BenchmarkResult as BenchmarkResultV1,
} from "./v1/benchmark/useBenchmark";
import { MasonryFlashList as MasonryFlashListV1 } from "./v1/MasonryFlashList";
import { JSFPSMonitor as JSFPSMonitorV1 } from "./v1/benchmark/JSFPSMonitor";
import {
  autoScroll as autoScrollV1,
  Cancellable as CancellableV1,
} from "./v1/benchmark/AutoScrollHelper";
// v2
import { FlashList as FlashListV2 } from "./v2/src/FlashList";
import { FlashListProps as FlashListPropsV2 } from "./v2/src/FlashListProps";
import {
  useBenchmark as useBenchmarkV2,
  BenchmarkParams as BenchmarkParamsV2,
  BenchmarkResult as BenchmarkResultV2,
} from "./v2/src/benchmark/useBenchmark";
import { MasonryFlashListV2 } from "./v2/src/MasonryFlashList";
import { JSFPSMonitor as JSFPSMonitorV2 } from "./v2/src/benchmark/JSFPSMonitor";
import {
  autoScroll as autoScrollV2,
  Cancellable as CancellableV2,
} from "./v2/src/benchmark/AutoScrollHelper";

const useV2 = isNewArch() && Platform.OS === "ios";

export const FlashList = useV2 ? FlashListV2 : FlashListV1;
export { FlashListV1 }; // we need to export v1 version to keep the ref types compatible

export type FlashListProps<TItem> = FlashListPropsV1<TItem> &
  FlashListPropsV2<TItem>;
export {
  ContentStyle, // ATTENTION, doesn't exist in v2
  ListRenderItem, // the same v1/v2
  ListRenderItemInfo, // the same v1/v2
  RenderTarget, // the same v1/v2
  RenderTargetOptions, // the same v1/v2
} from "./v1/FlashListProps";

export {
  useOnNativeBlankAreaEvents, // ATTENTION, doesn't exist in v2, better not use
  BlankAreaEventHandler, // ATTENTION, doesn't exist in v2, better not use
  BlankAreaEvent, // ATTENTION, doesn't exist in v2, better not use
} from "./v1/native/auto-layout/AutoLayoutView"; // ATTENTION, doesn't exist in v2, better not use

export const useBenchmark = useV2 ? useBenchmarkV2 : useBenchmarkV1;
export type BenchmarkParams = BenchmarkParamsV1 & BenchmarkParamsV2; // startManually only works for v2, rest is the same
export type BenchmarkResult = BenchmarkResultV1 & BenchmarkResultV2; // blankArea only works for v1, rest is the same

export { useDataMultiplier } from "./v1/benchmark/useDataMultiplier"; // v1/v2 the same

export {
  useFlatListBenchmark,
  FlatListBenchmarkParams,
} from "./v1/benchmark/useFlatListBenchmark"; // ATTENTION, doesn't exist in v2, better not use

export {
  useBlankAreaTracker,
  BlankAreaTrackerResult,
  BlankAreaTrackerConfig,
} from "./v1/benchmark/useBlankAreaTracker"; // ATTENTION, doesn't exist in v2, better not use

export const MasonryFlashList = useV2
  ? (MasonryFlashListV2 as typeof MasonryFlashListV1)
  : MasonryFlashListV1;
export {
  MasonryFlashListProps, // ATTENTION, not every v1 Masonry prop exists in v2
  MasonryFlashListScrollEvent,
  MasonryFlashListRef,
  MasonryListItem,
  MasonryListRenderItem,
  MasonryListRenderItemInfo,
} from "./v1/MasonryFlashList"; // ATTENTION, not every v1 Masonry prop exists in v2

export const JSFPSMonitor = useV2 ? JSFPSMonitorV2 : JSFPSMonitorV1;
export { JSFPSResult } from "./v1/benchmark/JSFPSMonitor"; // v1/v2 are the same

export const autoScroll = useV2 ? autoScrollV2 : autoScrollV1;
export const Cancellable = useV2 ? CancellableV2 : CancellableV1;
export { default as ViewToken } from "./v1/viewability/ViewToken"; // v1/v2 are the same
export { default as CellContainer } from "./v1/native/cell-container/CellContainer"; // ATTENTION, doesn't exist in v2, better not use

export { useLayoutState } from "./v2/src/recyclerview/hooks/useLayoutState"; // ATTENTION, this only exists in v2
export { useRecyclingState } from "./v2/src/recyclerview/hooks/useRecyclingState"; // ATTENTION, this only exists in v2
export { useMappingHelper } from "./v2/src/recyclerview/hooks/useMappingHelper"; // ATTENTION, this only exists in v2
export { useFlashListContext } from "./v2/src/recyclerview/RecyclerViewContextProvider"; // ATTENTION, this only exists in v2

export {
  LayoutCommitObserver,
  LayoutCommitObserverProps,
} from "./v2/src/recyclerview/LayoutCommitObserver"; // ATTENTION, this only exists in v2
export { FlashListRef } from "./v2/src/FlashListRef"; // ATTENTION, this only exists in v2
