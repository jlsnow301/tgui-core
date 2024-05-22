/**
 * @file
 * @copyright 2021 Aleksej Komarov
 * @license MIT
 */

import { describe,test } from "vitest";

import { classes } from "./react";

describe("classes", () => {
  test("empty", ({ expect }) => {
    expect(classes([])).toBe("");
  });

  test("result contains inputs", ({ expect }) => {
    const output = classes(["foo", "bar", false, true, 0, 1, "baz"]);
    expect(output).toContain("foo");
    expect(output).toContain("bar");
    expect(output).toContain("baz");
  });
});
