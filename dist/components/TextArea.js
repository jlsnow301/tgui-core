import { jsxs as F, jsx as i } from "react/jsx-runtime";
import { KEY as f } from "../common/keys.js";
import { classes as d } from "../common/react.js";
import { forwardRef as I, useRef as Y, useState as C, useImperativeHandle as H, useEffect as p } from "react";
import { Box as L } from "./Box.js";
import { toInputValue as g } from "./Input.js";
const J = I(
  (b, h) => {
    const {
      autoFocus: m,
      autoSelect: o,
      displayedValue: a,
      dontUseTabForIndent: A,
      maxLength: _,
      noborder: y,
      onChange: l,
      onEnter: u,
      onEscape: s,
      onInput: c,
      placeholder: w,
      scrollbar: S,
      selfClear: T,
      value: n,
      ...E
    } = b, { className: K, fluid: N, nowrap: k, ...D } = E, e = Y(null), [R, V] = C(0), j = (r) => {
      if (r.key === f.Enter) {
        if (r.shiftKey) {
          r.currentTarget.focus();
          return;
        }
        u == null || u(r, r.currentTarget.value), T && (r.currentTarget.value = ""), r.currentTarget.blur();
        return;
      }
      if (r.key === f.Escape) {
        s == null || s(r), T ? r.currentTarget.value = "" : (r.currentTarget.value = g(n), r.currentTarget.blur());
        return;
      }
      if (!A && r.key === f.Tab) {
        r.preventDefault();
        const { value: t, selectionStart: x, selectionEnd: B } = r.currentTarget;
        r.currentTarget.value = t.substring(0, x) + "	" + t.substring(B), r.currentTarget.selectionEnd = x + 1;
      }
    };
    return H(
      h,
      () => e.current
    ), p(() => {
      if (!m && !o)
        return;
      const r = e.current;
      r && (m || o) && setTimeout(() => {
        r.focus(), o && r.select();
      }, 1);
    }, []), p(() => {
      const r = e.current;
      if (!r)
        return;
      const t = g(n);
      r.value !== t && (r.value = t);
    }, [n]), /* @__PURE__ */ F(
      L,
      {
        className: d([
          "TextArea",
          N && "TextArea--fluid",
          y && "TextArea--noborder",
          K
        ]),
        ...D,
        children: [
          !!a && /* @__PURE__ */ i(
            "div",
            {
              style: {
                height: "100%",
                overflow: "hidden",
                position: "absolute",
                width: "100%"
              },
              children: /* @__PURE__ */ i(
                "div",
                {
                  className: d([
                    "TextArea__textarea",
                    "TextArea__textarea_custom"
                  ]),
                  style: {
                    transform: `translateY(-${R}px)`
                  },
                  children: a
                }
              )
            }
          ),
          /* @__PURE__ */ i(
            "textarea",
            {
              className: d([
                "TextArea__textarea",
                S && "TextArea__textarea--scrollable",
                k && "TextArea__nowrap"
              ]),
              maxLength: _,
              onBlur: (r) => l == null ? void 0 : l(r, r.target.value),
              onChange: (r) => c == null ? void 0 : c(r, r.target.value),
              onKeyDown: j,
              onScroll: () => {
                a && e.current && V(e.current.scrollTop);
              },
              placeholder: w,
              ref: e,
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
  J as TextArea
};
