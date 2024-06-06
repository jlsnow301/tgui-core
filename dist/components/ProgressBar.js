import { jsxs as x, jsx as m } from "react/jsx-runtime";
import { p as s } from "../ProgressBar.module-Jzqlebbx.js";
import { keyOfMatchingRange as v, toFixed as y, scale as N, clamp01 as S } from "../common/math.js";
import { classes as n } from "../common/react.js";
import { CSS_COLORS as _ } from "../constants.js";
import { computeBoxProps as B, computeBoxClassName as O } from "./Box.js";
const w = (d) => {
  const {
    className: p,
    value: r,
    minValue: f = 0,
    maxValue: u = 1,
    color: C,
    ranges: g = {},
    children: l,
    ...t
  } = d, a = N(r, f, u), h = l !== void 0, o = C || v(r, g) || "default", e = B(t), c = [
    s.progressBar,
    p,
    O(t)
  ], i = {
    width: S(a) * 100 + "%"
  };
  return _.includes(o) || o === "default" ? c.push(s["color__" + o]) : (e.style = { ...e.style, borderColor: o }, i.backgroundColor = o), /* @__PURE__ */ x("div", { className: n(c), ...e, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: n([s.fill, s.fill__animated]),
        style: i
      }
    ),
    /* @__PURE__ */ m("div", { className: s.content, children: h ? l : y(a * 100) + "%" })
  ] });
};
export {
  w as ProgressBar
};
