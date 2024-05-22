/**
 * Returns the arguments of a function F as an array.
 */

export type ArgumentsOf<F extends (...args: any) => any> = F extends (
  ...args: infer A
) => unknown
  ? A
  : never;
