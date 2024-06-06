import { jsxs as I, jsx as f } from "react/jsx-runtime";
import { KEY as p } from "../common/keys.js";
import { classes as d } from "../common/react.js";
import { forwardRef as Y, useRef as C, useState as H, useImperativeHandle as L, useEffect as b } from "react";
import { Box as P } from "./Box.js";
import { toInputValue as g } from "./Input.js";
import '../assets/TextArea.css';const U = "_textArea_20wp8_13", $ = "_fluid_20wp8_26", q = "_noborder_20wp8_32", z = "_inner_20wp8_36", G = "_scrollable_20wp8_36", J = "_custom_20wp8_71", M = "_nowrap_20wp8_76", O = "_wrapper_20wp8_82", e = {
  textArea: U,
  fluid: $,
  noborder: q,
  inner: z,
  scrollable: G,
  custom: J,
  nowrap: M,
  wrapper: O
}, er = Y(
  (T, x) => {
    const {
      autoFocus: m,
      autoSelect: s,
      displayedValue: a,
      dontUseTabForIndent: y,
      maxLength: h,
      noborder: A,
      onChange: l,
      onEnter: n,
      onEscape: u,
      onInput: c,
      placeholder: N,
      scrollbar: S,
      selfClear: _,
      value: i,
      ...E
    } = T, { className: K, fluid: k, nowrap: D, ...R } = E, t = C(null), [V, j] = H(0), B = (r) => {
      if (r.key === p.Enter) {
        if (r.shiftKey) {
          r.currentTarget.focus();
          return;
        }
        n == null || n(r, r.currentTarget.value), _ && (r.currentTarget.value = ""), r.currentTarget.blur();
        return;
      }
      if (r.key === p.Escape) {
        u == null || u(r), _ ? r.currentTarget.value = "" : (r.currentTarget.value = g(i), r.currentTarget.blur());
        return;
      }
      if (!y && r.key === p.Tab) {
        r.preventDefault();
        const { value: o, selectionStart: w, selectionEnd: F } = r.currentTarget;
        r.currentTarget.value = o.substring(0, w) + "	" + o.substring(F), r.currentTarget.selectionEnd = w + 1;
      }
    };
    return L(
      x,
      () => t.current
    ), b(() => {
      if (!m && !s)
        return;
      const r = t.current;
      r && (m || s) && setTimeout(() => {
        r.focus(), s && r.select();
      }, 1);
    }, []), b(() => {
      const r = t.current;
      if (!r)
        return;
      const o = g(i);
      r.value !== o && (r.value = o);
    }, [i]), /* @__PURE__ */ I(
      P,
      {
        className: d([
          e.textArea,
          k && e.fluid,
          A && e.noborder,
          K
        ]),
        ...R,
        children: [
          !!a && /* @__PURE__ */ f("div", { className: e.wrapper, children: /* @__PURE__ */ f(
            "div",
            {
              className: d([e.inner, e.custom]),
              style: {
                transform: `translateY(-${V}px)`
              },
              children: a
            }
          ) }),
          /* @__PURE__ */ f(
            "textarea",
            {
              className: d([
                e.inner,
                S && e.scrollable,
                D && e.nowrap
              ]),
              maxLength: h,
              onBlur: (r) => l == null ? void 0 : l(r, r.target.value),
              onChange: (r) => c == null ? void 0 : c(r, r.target.value),
              onKeyDown: B,
              onScroll: () => {
                a && t.current && j(t.current.scrollTop);
              },
              placeholder: N,
              ref: t,
              style: {
                color: a ? "rgba(0, 0, 0, 0)" : "inherit"
              }
            }
          )
        ]
      }
    );
  }
);
export {
  er as TextArea
};
