import { describe, it } from "vitest";

import { flow } from "./fp";

function add2(x: number): number {
  return x + 2;
}

function multiplyBy3(x: number): number {
  return x * 3;
}

function subtract5(x: number): number {
  return x - 5;
}

describe("flow", () => {
  it("composes multiple functions into one", ({ expect }) => {
    const composedFunction = flow(add2, multiplyBy3, subtract5);

    expect(composedFunction(4)).toBe(13); // ((4 + 2) * 3) - 5 = 13
  });

  it("handles arrays of functions", ({ expect }) => {
    const composedFunction = flow([add2, multiplyBy3], subtract5);

    expect(composedFunction(4)).toBe(13); // ((4 + 2) * 3) - 5 = 13
  });
});
