import { jsx as a, jsxs as f } from "react/jsx-runtime";
import { classes as n, canRender as m } from "../common/react.js";
import { computeBoxClassName as b, computeBoxProps as d } from "./Box.js";
import { Icon as _ } from "./Icon.js";
const h = (c) => {
  const { className: r, vertical: t, fill: o, fluid: e, children: l, ...s } = c;
  return /* @__PURE__ */ a(
    "div",
    {
      className: n([
        "Tabs",
        t ? "Tabs--vertical" : "Tabs--horizontal",
        o && "Tabs--fill",
        e && "Tabs--fluid",
        r,
        b(s)
      ]),
      ...d(s),
      children: l
    }
  );
}, N = (c) => {
  const {
    className: r,
    selected: t,
    color: o,
    icon: e,
    leftSlot: l,
    rightSlot: s,
    children: T,
    ...i
  } = c;
  return /* @__PURE__ */ f(
    "div",
    {
      className: n([
        "Tab",
        "Tabs__Tab",
        "Tab--color--" + o,
        t && "Tab--selected",
        r,
        b(i)
      ]),
      ...d(i),
      children: [
        m(l) && /* @__PURE__ */ a("div", { className: "Tab__left", children: l }) || !!e && /* @__PURE__ */ a("div", { className: "Tab__left", children: /* @__PURE__ */ a(_, { name: e }) }),
        /* @__PURE__ */ a("div", { className: "Tab__text", children: T }),
        m(s) && /* @__PURE__ */ a("div", { className: "Tab__right", children: s })
      ]
    }
  );
};
h.Tab = N;
export {
  h as Tabs
};
