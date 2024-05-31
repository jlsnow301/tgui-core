import { jsxs as K, jsx as f } from "react/jsx-runtime";
import { KEY as p } from "../common/keys.js";
import { classes as j } from "../common/react.js";
import { debounce as k } from "../common/timer.js";
import { useRef as B, useEffect as E } from "react";
import { Box as R } from "./Box.js";
function m(u) {
  return typeof u != "number" && typeof u != "string" ? "" : String(u);
}
const S = k((u) => u(), 250);
function A(u) {
  const {
    autoFocus: d,
    autoSelect: l,
    className: g,
    disabled: I,
    expensive: T,
    fluid: b,
    maxLength: x,
    monospace: y,
    onChange: e,
    onEnter: n,
    onEscape: o,
    onInput: a,
    placeholder: h,
    selfClear: N,
    value: s,
    ..._
  } = u, c = B(null);
  function w(r) {
    var i;
    if (!a)
      return;
    const t = (i = r.currentTarget) == null ? void 0 : i.value;
    T ? S(() => a(r, t)) : a(r, t);
  }
  function D(r) {
    if (r.key === p.Enter) {
      n == null || n(r, r.currentTarget.value), N ? r.currentTarget.value = "" : (r.currentTarget.blur(), e == null || e(r, r.currentTarget.value));
      return;
    }
    r.key === p.Escape && (o == null || o(r), r.currentTarget.value = m(s), r.currentTarget.blur());
  }
  return E(() => {
    const r = c.current;
    if (!r)
      return;
    const t = m(s);
    r.value !== t && (r.value = t), !(!d && !l) && setTimeout(() => {
      r.focus(), l && r.select();
    }, 1);
  }, []), /* @__PURE__ */ K(
    R,
    {
      className: j([
        "Input",
        b && "Input--fluid",
        y && "Input--monospace",
        g
      ]),
      ..._,
      children: [
        /* @__PURE__ */ f("div", { className: "Input__baseline", children: "." }),
        /* @__PURE__ */ f(
          "input",
          {
            className: "Input__input",
            disabled: I,
            maxLength: x,
            onBlur: (r) => e == null ? void 0 : e(r, r.target.value),
            onChange: w,
            onKeyDown: D,
            placeholder: h,
            ref: c
          }
        )
      ]
    }
  );
}
export {
  A as Input,
  m as toInputValue
};
