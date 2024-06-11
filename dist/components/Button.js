import { jsx as c, jsxs as D, Fragment as S } from "react/jsx-runtime";
import { KEY as B } from "../common/keys.js";
import { classes as N } from "../common/react.js";
import { useState as E, createRef as K, useEffect as M, useRef as V } from "react";
import { computeBoxClassName as j, computeBoxProps as q, Box as O } from "./Box.js";
import { Icon as R } from "./Icon.js";
import { Tooltip as F } from "./Tooltip.js";
import '../assets/Button.css';const T = "_button_19bob_17", L = "_fa_19bob_34", Y = "_fas_19bob_35", z = "_far_19bob_36", G = "_dropdown_19bob_43", H = "_hasContent_19bob_49", J = "_iconPosition__right_19bob_55", Q = "_ellipsis_19bob_62", U = "_fluid_19bob_67", W = "_circular_19bob_73", X = "_compact_19bob_77", Z = "_color__black_19bob_82", $ = "_color__white_19bob_95", oo = "_color__red_19bob_108", to = "_color__orange_19bob_121", _o = "_color__yellow_19bob_134", no = "_color__olive_19bob_147", eo = "_color__green_19bob_160", co = "_color__teal_19bob_173", lo = "_color__blue_19bob_186", ro = "_color__violet_19bob_199", io = "_color__purple_19bob_212", so = "_color__pink_19bob_225", ao = "_color__brown_19bob_238", bo = "_color__grey_19bob_251", uo = "_color__good_19bob_277", fo = "_color__average_19bob_290", po = "_color__bad_19bob_303", mo = "_color__label_19bob_316", go = "_color__default_19bob_329", ho = "_color__caution_19bob_342", Co = "_color__danger_19bob_355", yo = "_color__transparent_19bob_368", ko = "_disabled_19bob_383", xo = "_selected_19bob_387", vo = "_flex_19bob_400", wo = "_flex__fluid_19bob_405", Ao = "_verticalAlignContent__top_19bob_409", Po = "_verticalAlignContent__middle_19bob_413", Bo = "_verticalAlignContent__bottom_19bob_417", Io = "_content_19bob_421", No = "_textMargin_19bob_426", o = {
  button: T,
  fa: L,
  fas: Y,
  far: z,
  dropdown: G,
  hasContent: H,
  iconPosition__right: J,
  ellipsis: Q,
  fluid: U,
  circular: W,
  compact: X,
  color__black: Z,
  color__white: $,
  color__red: oo,
  color__orange: to,
  color__yellow: _o,
  color__olive: no,
  color__green: eo,
  color__teal: co,
  color__blue: lo,
  color__violet: ro,
  color__purple: io,
  color__pink: so,
  color__brown: ao,
  color__grey: bo,
  "color__light-grey": "_color__light-grey_19bob_264",
  color__good: uo,
  color__average: fo,
  color__bad: po,
  color__label: mo,
  color__default: go,
  color__caution: ho,
  color__danger: Co,
  color__transparent: yo,
  disabled: ko,
  selected: xo,
  flex: vo,
  flex__fluid: wo,
  verticalAlignContent__top: Ao,
  verticalAlignContent__middle: Po,
  verticalAlignContent__bottom: Bo,
  content: Io,
  textMargin: No
}, C = (b) => {
  const {
    captureKeys: s = !0,
    children: a,
    circular: f,
    className: u,
    color: i,
    compact: y,
    content: p,
    disabled: t,
    ellipsis: l,
    fluid: n,
    icon: e,
    iconColor: d,
    iconPosition: m,
    iconRotation: w,
    iconSpin: I,
    onClick: k,
    selected: x,
    tooltip: g,
    tooltipPosition: A,
    verticalAlignContent: v,
    ...P
  } = b, h = p || a;
  let _ = /* @__PURE__ */ c(
    "div",
    {
      className: N([
        o.button,
        n && o.fluid,
        t && o.disabled,
        x && o.selected,
        !!h && o.hasContent,
        f && o.circular,
        y && o.compact,
        m && o["iconPosition__" + m],
        v && o.flex,
        v && n && o.flex__fluid,
        v && o["verticalAlignContent__" + v],
        i && typeof i == "string" ? o["color__" + i] : o.color__default,
        u,
        j(P)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (r) => {
        !t && k && k(r);
      },
      onKeyDown: (r) => {
        if (s) {
          if (r.key === B.Space || r.key === B.Enter) {
            r.preventDefault(), !t && k && k(r);
            return;
          }
          r.key === B.Escape && r.preventDefault();
        }
      },
      ...q(P),
      children: /* @__PURE__ */ D("div", { className: o.content, children: [
        e && m !== "right" && /* @__PURE__ */ c(
          R,
          {
            name: e,
            color: d,
            rotation: w,
            spin: I
          }
        ),
        l ? /* @__PURE__ */ c(
          "span",
          {
            className: N([o.ellipsis, e && o.textMargin]),
            children: h
          }
        ) : h,
        e && m === "right" && /* @__PURE__ */ c(
          R,
          {
            name: e,
            color: d,
            rotation: w,
            spin: I
          }
        )
      ] })
    }
  );
  return g && (_ = /* @__PURE__ */ c(F, { content: g, position: A, children: _ })), _;
}, Ro = (b) => {
  const { checked: s, ...a } = b;
  return /* @__PURE__ */ c(
    C,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...a
    }
  );
};
C.Checkbox = Ro;
const Do = (b) => {
  const {
    children: s,
    color: a,
    confirmColor: f = "bad",
    confirmContent: u = "Confirm?",
    confirmIcon: i,
    ellipsis: y = !0,
    icon: p,
    onClick: t,
    ...l
  } = b, [n, e] = E(!1);
  return /* @__PURE__ */ c(
    C,
    {
      icon: n ? i : p,
      color: n ? f : a,
      onClick: (m) => {
        if (!n) {
          e(!0);
          return;
        }
        t == null || t(m), e(!1);
      },
      ...l,
      children: n ? u : s
    }
  );
};
C.Confirm = Do;
const Eo = (b) => {
  const {
    children: s,
    color: a = "default",
    content: f,
    currentValue: u,
    defaultValue: i,
    disabled: y,
    fluid: p,
    icon: t,
    iconRotation: l,
    iconSpin: n,
    maxLength: e,
    onCommit: d = () => null,
    placeholder: m,
    tooltip: w,
    tooltipPosition: I,
    ...k
  } = b, [x, g] = E(!1), A = K(), v = f || s, P = (_) => {
    const r = A.current;
    if (!r)
      return;
    r.value !== "" ? d(_, r.value) : i && d(_, i);
  };
  M(() => {
    const _ = A.current;
    if (_ && x) {
      _.value = u || "";
      try {
        _.focus(), _.select();
      } catch {
      }
    }
  }, [x, u]);
  let h = /* @__PURE__ */ D(
    O,
    {
      className: N([
        o.button,
        p && o.fluid,
        o["color__" + a]
      ]),
      ...k,
      onClick: () => g(!0),
      children: [
        t && /* @__PURE__ */ c(R, { name: t, rotation: l, spin: n }),
        /* @__PURE__ */ c("div", { children: v }),
        /* @__PURE__ */ c(
          "input",
          {
            disabled: !!y,
            ref: A,
            className: "NumberInput__input",
            style: {
              display: x ? "" : "none",
              textAlign: "left"
            },
            onBlur: (_) => {
              x && (g(!1), P(_));
            },
            onKeyDown: (_) => {
              if (_.key === B.Enter) {
                g(!1), P(_);
                return;
              }
              _.key === B.Escape && g(!1);
            }
          }
        )
      ]
    }
  );
  return w && (h = /* @__PURE__ */ c(F, { content: w, position: I, children: h })), h;
};
C.Input = Eo;
function Fo(b) {
  const { accept: s, multiple: a, onSelectFiles: f, ...u } = b, i = V(null);
  async function y(t) {
    const l = Array.from(t).map((n) => {
      const e = new FileReader();
      return new Promise((d) => {
        e.onload = () => d(e.result), e.readAsText(n);
      });
    });
    return await Promise.all(l);
  }
  async function p(t) {
    const l = t.target.files;
    if (l != null && l.length) {
      const n = await y(l);
      f(a ? n : n[0]);
    }
  }
  return /* @__PURE__ */ D(S, { children: [
    /* @__PURE__ */ c(C, { onClick: () => {
      var t;
      return (t = i.current) == null ? void 0 : t.click();
    }, ...u }),
    /* @__PURE__ */ c(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: i,
        accept: s,
        multiple: a,
        onChange: p
      }
    )
  ] });
}
C.File = Fo;
export {
  C as Button,
  Ro as ButtonCheckbox
};
