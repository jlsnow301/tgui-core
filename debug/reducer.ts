/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

type DebugState = {
  kitchenSink: boolean;
  debugLayout: boolean;
};

export const debugReducer = (state: DebugState, action) => {
  const { type } = action;
  if (type === 'debug/toggleKitchenSink') {
    return {
      ...state,
      kitchenSink: !state.kitchenSink,
    };
  }
  if (type === 'debug/toggleDebugLayout') {
    return {
      ...state,
      debugLayout: !state.debugLayout,
    };
  }
  return state;
};