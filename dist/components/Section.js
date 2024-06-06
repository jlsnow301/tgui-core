import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { classes as h, canRender as _ } from "../common/react.js";
import { forwardRef as v, useEffect as z } from "react";
import { addScrollableNode as H, removeScrollableNode as T } from "../events.js";
import { computeBoxClassName as S, computeBoxProps as j } from "./Box.js";
import '../assets/Section.css';const B = "_section_upqxx_17", y = "_title_upqxx_28", C = "_titleText_upqxx_34", E = "_buttons_upqxx_40", P = "_rest_upqxx_47", d = "_content_upqxx_51", g = "_fitted_upqxx_55", k = "_fill_upqxx_59", A = "_scrollable_upqxx_73", D = "_scrollableHorizontal_upqxx_90", t = {
  section: B,
  title: y,
  titleText: C,
  buttons: E,
  rest: P,
  content: d,
  fitted: g,
  fill: k,
  scrollable: A,
  scrollableHorizontal: D
}, L = v(
  (x, l) => {
    const {
      buttons: o,
      children: a,
      className: u,
      fill: m,
      fitted: p,
      onScroll: b,
      scrollable: e,
      scrollableHorizontal: c,
      title: n,
      container_id: q,
      ...i
    } = x, N = _(n) || _(o);
    return z(() => {
      if (l != null && l.current && !(!e && !c))
        return H(l.current), () => {
          l != null && l.current && T(l.current);
        };
    }, []), /* @__PURE__ */ r(
      "div",
      {
        id: q || "",
        className: h([
          t.section,
          m && t.fill,
          p && t.fitted,
          e && t.scrollable,
          c && t.scrollableHorizontal,
          u,
          S(i)
        ]),
        ...j(i),
        children: [
          N && /* @__PURE__ */ r("div", { className: t.title, children: [
            /* @__PURE__ */ s("span", { className: t.titleText, children: n }),
            /* @__PURE__ */ s("div", { className: t.buttons, children: o })
          ] }),
          /* @__PURE__ */ s("div", { className: t.rest, children: /* @__PURE__ */ s(
            "div",
            {
              className: t.content,
              onScroll: b,
              ref: l,
              children: a
            }
          ) })
        ]
      }
    );
  }
);
export {
  L as Section
};
