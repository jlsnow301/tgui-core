import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { classes as i, canRender as d } from "../common/react.js";
import { computeBoxClassName as b, computeBoxProps as x } from "./Box.js";
import { Icon as h } from "./Icon.js";
import '../assets/Tabs.css';const m = "_tabs_3dx9a_13", v = "_fill_3dx9a_20", p = "_section_3dx9a_24", u = "_vertical_3dx9a_35", w = "_horizontal_3dx9a_40", y = "_tabs__tab_3dx9a_48", N = "_fluid_3dx9a_52", k = "_tab_3dx9a_13", z = "_selected_3dx9a_66", T = "_tab__text_3dx9a_75", j = "_tab__left_3dx9a_80", B = "_tab__right_3dx9a_86", S = "_color__black_3dx9a_113", C = "_color__white_3dx9a_125", I = "_color__red_3dx9a_137", P = "_color__orange_3dx9a_149", R = "_color__yellow_3dx9a_161", q = "_color__olive_3dx9a_173", A = "_color__green_3dx9a_185", D = "_color__teal_3dx9a_197", E = "_color__blue_3dx9a_209", F = "_color__violet_3dx9a_221", G = "_color__purple_3dx9a_233", H = "_color__pink_3dx9a_245", J = "_color__brown_3dx9a_257", K = "_color__grey_3dx9a_269", L = "_color__good_3dx9a_293", M = "_color__average_3dx9a_305", O = "_color__bad_3dx9a_317", Q = "_color__label_3dx9a_329", _ = {
  tabs: m,
  fill: v,
  section: p,
  "section--fitted": "_section--fitted_3dx9a_28",
  vertical: u,
  horizontal: w,
  tabs__tab: y,
  fluid: N,
  tab: k,
  selected: z,
  tab__text: T,
  tab__left: j,
  tab__right: B,
  color__black: S,
  color__white: C,
  color__red: I,
  color__orange: P,
  color__yellow: R,
  color__olive: q,
  color__green: A,
  color__teal: D,
  color__blue: E,
  color__violet: F,
  color__purple: G,
  color__pink: H,
  color__brown: J,
  color__grey: K,
  "color__light-grey": "_color__light-grey_3dx9a_281",
  color__good: L,
  color__average: M,
  color__bad: O,
  color__label: Q
}, U = (r) => {
  const { className: a, vertical: e, fill: s, fluid: c, children: t, ...l } = r;
  return /* @__PURE__ */ o(
    "div",
    {
      className: i([
        _.tabs,
        e ? _.vertical : _.horizontal,
        s && _.fill,
        c && _.fluid,
        a,
        b(l)
      ]),
      ...x(l),
      children: t
    }
  );
}, V = (r) => {
  const {
    className: a,
    selected: e,
    color: s,
    icon: c,
    leftSlot: t,
    rightSlot: l,
    children: g,
    ...n
  } = r;
  return /* @__PURE__ */ f(
    "div",
    {
      className: i([
        _.tab,
        _.tabs__tab,
        _["color__" + s],
        e && _.selected,
        a,
        b(n)
      ]),
      ...x(n),
      children: [
        d(t) && /* @__PURE__ */ o("div", { className: _.tab__left, children: t }) || !!c && /* @__PURE__ */ o("div", { className: _.tab__left, children: /* @__PURE__ */ o(h, { name: c }) }),
        /* @__PURE__ */ o("div", { className: _.tab__text, children: g }),
        d(l) && /* @__PURE__ */ o("div", { className: _.tab__right, children: l })
      ]
    }
  );
};
U.Tab = V;
export {
  U as Tabs
};
