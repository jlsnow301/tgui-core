import { jsxs as j, jsx as p } from "react/jsx-runtime";
import { KEY as m } from "../common/keys.js";
import { classes as k } from "../common/react.js";
import { debounce as B } from "../common/timer.js";
import { useRef as E, useEffect as R } from "react";
import { Box as S } from "./Box.js";
import '../assets/Input.css';const V = "_input_upnwi_13", F = "_fluid_upnwi_28", L = "_baseline_upnwi_33", Y = "_inner_upnwi_38", q = "_monospace_upnwi_64", t = {
  input: V,
  fluid: F,
  baseline: L,
  inner: Y,
  monospace: q
};
function _(n) {
  return typeof n != "number" && typeof n != "string" ? "" : String(n);
}
const z = B((n) => n(), 250);
function P(n) {
  const {
    autoFocus: d,
    autoSelect: c,
    className: b,
    disabled: g,
    expensive: w,
    fluid: T,
    maxLength: y,
    monospace: x,
    onChange: r,
    onEnter: i,
    onEscape: o,
    onInput: s,
    placeholder: h,
    selfClear: I,
    value: l,
    ...N
  } = n, a = E(null);
  function D(e) {
    var f;
    if (!s)
      return;
    const u = (f = e.currentTarget) == null ? void 0 : f.value;
    w ? z(() => s(e, u)) : s(e, u);
  }
  function K(e) {
    if (e.key === m.Enter) {
      i == null || i(e, e.currentTarget.value), I ? e.currentTarget.value = "" : (e.currentTarget.blur(), r == null || r(e, e.currentTarget.value));
      return;
    }
    e.key === m.Escape && (o == null || o(e), e.currentTarget.value = _(l), e.currentTarget.blur());
  }
  return R(() => {
    const e = a.current;
    if (!e)
      return;
    const u = _(l);
    e.value !== u && (e.value = u), !(!d && !c) && setTimeout(() => {
      e.focus(), c && e.select();
    }, 1);
  }, []), /* @__PURE__ */ j(
    S,
    {
      className: k([
        t.input,
        T && t.fluid,
        x && t.monospace,
        b
      ]),
      ...N,
      children: [
        /* @__PURE__ */ p("div", { className: t.baseline, children: "." }),
        /* @__PURE__ */ p(
          "input",
          {
            className: t.inner,
            disabled: g,
            maxLength: y,
            onBlur: (e) => r == null ? void 0 : r(e, e.target.value),
            onChange: D,
            onKeyDown: K,
            placeholder: h,
            ref: a
          }
        )
      ]
    }
  );
}
export {
  P as Input,
  _ as toInputValue
};
