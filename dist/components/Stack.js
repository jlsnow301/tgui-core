import { jsx as c } from "react/jsx-runtime";
import { classes as _ } from "../common/react.js";
import { computeFlexClassName as f, computeFlexProps as w, computeFlexItemProps as o } from "./Flex.js";
import { computeBoxClassName as a } from "./Box.js";
import '../assets/Stack.css';const h = "_fill_wrul1_9", p = "_horizontal_wrul1_13", z = "_item_wrul1_13", x = "_vertical_wrul1_20", N = "_reverse_wrul1_27", S = "_reverse__vertical_wrul1_35", k = "_zebra_wrul1_43", b = "_divider_wrul1_47", F = "_divider__hidden_wrul1_47", t = {
  fill: h,
  horizontal: p,
  item: z,
  vertical: x,
  reverse: N,
  reverse__vertical: S,
  zebra: k,
  divider: b,
  divider__hidden: F
};
function n(i) {
  const { className: s, vertical: e, fill: r, reverse: l, zebra: d, ...v } = i, m = e ? "column" : "row", u = l ? "-reverse" : "";
  return /* @__PURE__ */ c(
    "div",
    {
      className: _([
        r && t.fill,
        e ? t.vertical : t.horizontal,
        d && t.zebra,
        l && t[`reverse${e ? "__vertical" : ""}`],
        s,
        f(i)
      ]),
      ...w({
        direction: `${m}${u}`,
        ...v
      })
    }
  );
}
function I(i) {
  const { className: s, innerRef: e, ...r } = i;
  return /* @__PURE__ */ c(
    "div",
    {
      className: _([t.item, s, a(r)]),
      ref: e,
      ...o(r)
    }
  );
}
n.Item = I;
function P(i) {
  const { className: s, hidden: e, ...r } = i;
  return /* @__PURE__ */ c(
    "div",
    {
      className: _([
        "Stack__item",
        "Stack__divider",
        e && "Stack__divider--hidden",
        s,
        a(r)
      ]),
      ...o(r)
    }
  );
}
n.Divider = P;
export {
  n as Stack
};
