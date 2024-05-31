import { jsxs as s, jsx as c } from "react/jsx-runtime";
import { classes as h, canRender as r } from "../common/react.js";
import { forwardRef as v, useEffect as x } from "react";
import { addScrollableNode as j, removeScrollableNode as z } from "../events.js";
import { computeBoxClassName as B, computeBoxProps as H } from "./Box.js";
const k = v(
  (m, t) => {
    const {
      buttons: l,
      children: a,
      className: u,
      fill: S,
      fitted: _,
      onScroll: p,
      scrollable: i,
      scrollableHorizontal: e,
      title: n,
      container_id: N,
      ...o
    } = m, b = r(n) || r(l);
    return x(() => {
      if (t != null && t.current && !(!i && !e))
        return j(t.current), () => {
          t != null && t.current && z(t.current);
        };
    }, []), /* @__PURE__ */ s(
      "div",
      {
        id: N || "",
        className: h([
          "Section",
          S && "Section--fill",
          _ && "Section--fitted",
          i && "Section--scrollable",
          e && "Section--scrollableHorizontal",
          u,
          B(o)
        ]),
        ...H(o),
        children: [
          b && /* @__PURE__ */ s("div", { className: "Section__title", children: [
            /* @__PURE__ */ c("span", { className: "Section__titleText", children: n }),
            /* @__PURE__ */ c("div", { className: "Section__buttons", children: l })
          ] }),
          /* @__PURE__ */ c("div", { className: "Section__rest", children: /* @__PURE__ */ c(
            "div",
            {
              className: "Section__content",
              onScroll: p,
              ref: t,
              children: a
            }
          ) })
        ]
      }
    );
  }
);
export {
  k as Section
};
