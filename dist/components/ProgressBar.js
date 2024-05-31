import { jsxs as B, jsx as i } from "react/jsx-runtime";
import { keyOfMatchingRange as C, toFixed as P, scale as h, clamp01 as x } from "../common/math.js";
import { classes as _ } from "../common/react.js";
import { CSS_COLORS as v } from "../constants.js";
import { computeBoxProps as y, computeBoxClassName as N } from "./Box.js";
const k = (n) => {
  const {
    className: m,
    value: o,
    minValue: d = 0,
    maxValue: f = 1,
    color: u,
    ranges: p = {},
    children: r,
    ...l
  } = n, a = h(o, d, f), g = r !== void 0, s = u || C(o, p) || "default", e = y(l), t = ["ProgressBar", m, N(l)], c = {
    width: x(a) * 100 + "%"
  };
  return v.includes(s) || s === "default" ? t.push("ProgressBar--color--" + s) : (e.style = { ...e.style, borderColor: s }, c.backgroundColor = s), /* @__PURE__ */ B("div", { className: _(t), ...e, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "ProgressBar__fill ProgressBar__fill--animated",
        style: c
      }
    ),
    /* @__PURE__ */ i("div", { className: "ProgressBar__content", children: g ? r : P(a * 100) + "%" })
  ] });
};
export {
  k as ProgressBar
};
