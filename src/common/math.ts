/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

/**
 * Limits a number to the range between 'min' and 'max'.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Limits a number between 0 and 1.
 */
export function clamp01(value: number): number {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

/**
 * Scales a number to fit into the range between min and max.
 */
export function scale(value: number, min: number, max: number): number {
  return (value - min) / (max - min);
}

/**
 * Robust number rounding.
 *
 * Adapted from Locutus, see: http://locutus.io/php/math/round/
 *
 * @param  {number} value
 * @param  {number} precision
 * @return {number}
 */
export function round(value: number, precision: number): number {
  if (!value || isNaN(value)) {
    return value;
  }

  // making sure precision is integer
  precision |= 0;
  const m = Math.pow(10, precision);
  value *= m;
  // sign of the number
  const sgn = +(value > 0) | -(value < 0);
  // isHalf = value % 1 === 0.5 * sgn;
  const isHalf = Math.abs(value % 1) >= 0.4999999999854481;
  const f = Math.floor(value);
  if (isHalf) {
    // rounds .5 away from zero
    value = sgn > 0 ? f + sgn : f;
  }
  return (isHalf ? value : Math.round(value)) / m;
}

/**
 * Returns a string representing a number in fixed point notation.
 */
export function toFixed(value: number, fractionDigits = 0): string {
  return Number(value).toFixed(Math.max(fractionDigits, 0));
}

/**
 * Checks whether a value is within the provided range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export function inRange(value: number, range: [number, number]): boolean {
  return range && value >= range[0] && value <= range[1];
}

/**
 * Walks over the object with ranges, comparing value against every range,
 * and returns the key of the first matching range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export function keyOfMatchingRange(
  value: number,
  ranges: Record<string, [number, number]>,
): string | undefined {
  for (const rangeName in ranges) {
    const range = ranges[rangeName];
    if (inRange(value, range)) {
      return rangeName;
    }
  }
  return;
}

/**
 * Get number of digits following the decimal point in a number
 */
export function numberOfDecimalDigits(value: number): number {
  if (Math.floor(value) !== value) {
    return value.toString().split(".")[1].length || 0;
  }
  return 0;
}
