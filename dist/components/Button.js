import { jsx as i, jsxs as F, Fragment as S } from "react/jsx-runtime";
import { KEY as P } from "../common/keys.js";
import { classes as D } from "../common/react.js";
import { useState as _, createRef as v, useEffect as K, useRef as V } from "react";
import { computeBoxClassName as j, computeBoxProps as q, Box as O } from "./Box.js";
import { Icon as E } from "./Icon.js";
import { Tooltip as A } from "./Tooltip.js";
import '../assets/Button.css';const k = (a) => {
  const {
    captureKeys: s = !0,
    children: u,
    circular: d,
    className: f,
    color: l,
    compact: y,
    content: m,
    disabled: t,
    ellipsis: r,
    fluid: o,
    icon: e,
    iconColor: p,
    iconPosition: h,
    iconRotation: I,
    iconSpin: w,
    onClick: x,
    selected: g,
    tooltip: B,
    tooltipPosition: N,
    verticalAlignContent: b,
    ...R
  } = a, C = m || u;
  let n = /* @__PURE__ */ i(
    "div",
    {
      className: D([
        "Button",
        o && "Button--fluid",
        t && "Button--disabled",
        g && "Button--selected",
        !!C && "Button--hasContent",
        d && "Button--circular",
        y && "Button--compact",
        h && "Button--iconPosition--" + h,
        b && "Button--flex",
        b && o && "Button--flex--fluid",
        b && "Button--verticalAlignContent--" + b,
        l && typeof l == "string" ? "Button--color--" + l : "Button--color--default",
        f,
        j(R)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (c) => {
        !t && x && x(c);
      },
      onKeyDown: (c) => {
        if (s) {
          if (c.key === P.Space || c.key === P.Enter) {
            c.preventDefault(), !t && x && x(c);
            return;
          }
          c.key === P.Escape && c.preventDefault();
        }
      },
      ...q(R),
      children: /* @__PURE__ */ F("div", { className: "Button__content", children: [
        e && h !== "right" && /* @__PURE__ */ i(
          E,
          {
            name: e,
            color: p,
            rotation: I,
            spin: w
          }
        ),
        r ? /* @__PURE__ */ i(
          "span",
          {
            className: D([
              "Button--ellipsis",
              e && "Button__textMargin"
            ]),
            children: C
          }
        ) : C,
        e && h === "right" && /* @__PURE__ */ i(
          E,
          {
            name: e,
            color: p,
            rotation: I,
            spin: w
          }
        )
      ] })
    }
  );
  return B && (n = /* @__PURE__ */ i(A, { content: B, position: N, children: n })), n;
}, T = (a) => {
  const { checked: s, ...u } = a;
  return /* @__PURE__ */ i(
    k,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...u
    }
  );
};
k.Checkbox = T;
const L = (a) => {
  const {
    children: s,
    color: u,
    confirmColor: d = "bad",
    confirmContent: f = "Confirm?",
    confirmIcon: l,
    ellipsis: y = !0,
    icon: m,
    onClick: t,
    ...r
  } = a, [o, e] = _(!1);
  return /* @__PURE__ */ i(
    k,
    {
      icon: o ? l : m,
      color: o ? d : u,
      onClick: (h) => {
        if (!o) {
          e(!0);
          return;
        }
        t == null || t(h), e(!1);
      },
      ...r,
      children: o ? f : s
    }
  );
};
k.Confirm = L;
const M = (a) => {
  const {
    children: s,
    color: u = "default",
    content: d,
    currentValue: f,
    defaultValue: l,
    disabled: y,
    fluid: m,
    icon: t,
    iconRotation: r,
    iconSpin: o,
    maxLength: e,
    onCommit: p = () => null,
    placeholder: h,
    tooltip: I,
    tooltipPosition: w,
    ...x
  } = a, [g, B] = _(!1), N = v(), b = d || s, R = (n) => {
    const c = N.current;
    if (!c)
      return;
    c.value !== "" ? p(n, c.value) : l && p(n, l);
  };
  K(() => {
    const n = N.current;
    if (n && g) {
      n.value = f || "";
      try {
        n.focus(), n.select();
      } catch {
      }
    }
  }, [g, f]);
  let C = /* @__PURE__ */ F(
    O,
    {
      className: D([
        "Button",
        m && "Button--fluid",
        "Button--color--" + u
      ]),
      ...x,
      onClick: () => B(!0),
      children: [
        t && /* @__PURE__ */ i(E, { name: t, rotation: r, spin: o }),
        /* @__PURE__ */ i("div", { children: b }),
        /* @__PURE__ */ i(
          "input",
          {
            disabled: !!y,
            ref: N,
            className: "NumberInput__input",
            style: {
              display: g ? "" : "none",
              textAlign: "left"
            },
            onBlur: (n) => {
              g && (B(!1), R(n));
            },
            onKeyDown: (n) => {
              if (n.key === P.Enter) {
                B(!1), R(n);
                return;
              }
              n.key === P.Escape && B(!1);
            }
          }
        )
      ]
    }
  );
  return I && (C = /* @__PURE__ */ i(A, { content: I, position: w, children: C })), C;
};
k.Input = M;
function Y(a) {
  const { accept: s, multiple: u, onSelectFiles: d, ...f } = a, l = V(null);
  async function y(t) {
    const r = Array.from(t).map((o) => {
      const e = new FileReader();
      return new Promise((p) => {
        e.onload = () => p(e.result), e.readAsText(o);
      });
    });
    return await Promise.all(r);
  }
  async function m(t) {
    const r = t.target.files;
    if (r != null && r.length) {
      const o = await y(r);
      d(u ? o : o[0]);
    }
  }
  return /* @__PURE__ */ F(S, { children: [
    /* @__PURE__ */ i(k, { onClick: () => {
      var t;
      return (t = l.current) == null ? void 0 : t.click();
    }, ...f }),
    /* @__PURE__ */ i(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: l,
        accept: s,
        multiple: u,
        onChange: m
      }
    )
  ] });
}
k.File = Y;
export {
  k as Button,
  T as ButtonCheckbox
};
