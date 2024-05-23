/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

/**
 * Helper for conditionally adding/removing classes in React
 */
export function classes(classNames: (string | BooleanLike)[]) {
  let className = "";

  for (const part of classNames) {
    if (typeof part === "string") {
      className += part + " ";
    }
  }
  return className;
}

/**
 * Normalizes children prop, so that it is always an array of VDom
 * elements.
 */
export function normalizeChildren<T>(children: T | T[]) {
  if (Array.isArray(children)) {
    return children.flat().filter((value) => value) as T[];
  }
  if (typeof children === "object") {
    return [children];
  }
  return [];
}

/**
 * Shallowly checks if two objects are different.
 * Credit: https://github.com/developit/preact-compat
 */
export function shallowDiffers(a: object, b: object) {
  let i;
  for (i in a) {
    if (!(i in b)) {
      return true;
    }
  }
  for (i in b) {
    if (a[i] !== b[i]) {
      return true;
    }
  }
  return false;
}

/**
 * A common case in tgui, when you pass a value conditionally, these are
 * the types that can fall through the condition.
 */
export type BooleanLike = number | boolean | null | undefined;

/**
 * A helper to determine whether the object is renderable by React.
 */
export function canRender(value: unknown) {
  return value !== undefined && value !== null && typeof value !== "boolean";
}
