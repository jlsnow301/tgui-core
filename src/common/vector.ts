/**
 * N-dimensional vector manipulation functions.
 *
 * Vectors are plain number arrays, i.e. [x, y, z].
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

export type Vector = number[];

export function vecAdd(...vecs: Vector[]): Vector {
  const result: Vector = [];
  for (const vec of vecs) {
    for (let i = 0; i < vec.length; i++) {
      result[i] = (result[i] || 0) + vec[i];
    }
  }
  return result;
}

export function vecSubtract(...vecs: Vector[]): Vector {
  const result: Vector = [];
  for (const vec of vecs) {
    for (let i = 0; i < vec.length; i++) {
      result[i] = (result[i] || 0) - vec[i];
    }
  }
  return result;
}

export function vecMultiply(...vecs: Vector[]): Vector {
  const result: Vector = [];
  for (const vec of vecs) {
    for (let i = 0; i < vec.length; i++) {
      result[i] = (result[i] || 0) * vec[i];
    }
  }
  return result;
}

export function vecDivide(...vecs: Vector[]): Vector {
  const result: Vector = [];
  for (const vec of vecs) {
    for (let i = 0; i < vec.length; i++) {
      result[i] = (result[i] || 0) / vec[i];
    }
  }
  return result;
}

export function vecScale(vec: Vector, n: number): Vector {
  const result: Vector = [];
  for (const x of vec) {
    result.push(x * n);
  }
  return result;
}

export function vecInverse(vec: Vector): Vector {
  const result: Vector = [];
  for (const x of vec) {
    result.push(-x);
  }
  return result;
}

export function vecLength(vec: Vector): number {
  let sum = 0;
  for (const x of vec) {
    sum += x * x;
  }
  return Math.sqrt(sum);
}

export function vecNormalize(vec: Vector): Vector {
  const length = vecLength(vec);
  const result: Vector = [];
  for (const c of vec) {
    result.push(c / length);
  }
  return result;
}
