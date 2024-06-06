import { jsx as e, jsxs as D, Fragment as S } from "react/jsx-runtime";
import { KEY as B } from "../common/keys.js";
import { classes as N } from "../common/react.js";
import { useState as E, createRef as K, useEffect as M, useRef as V } from "react";
import { computeBoxClassName as j, computeBoxProps as q, Box as O } from "./Box.js";
import { Icon as R } from "./Icon.js";
import { Tooltip as F } from "./Tooltip.js";
import '../assets/Button.css';const T = "_button_pi5yi_17", L = "_fa_pi5yi_34", Y = "_fas_pi5yi_35", z = "_far_pi5yi_36", G = "_dropdown_pi5yi_43", H = "_hasContent_pi5yi_49", J = "_iconPosition__right_pi5yi_55", Q = "_ellipsis_pi5yi_62", U = "_fluid_pi5yi_67", W = "_circular_pi5yi_73", X = "_compact_pi5yi_77", Z = "_color__black_pi5yi_82", $ = "_color__white_pi5yi_95", oo = "_color__red_pi5yi_108", to = "_color__orange_pi5yi_121", _o = "_color__yellow_pi5yi_134", io = "_color__olive_pi5yi_147", no = "_color__green_pi5yi_160", eo = "_color__teal_pi5yi_173", co = "_color__blue_pi5yi_186", lo = "_color__violet_pi5yi_199", ro = "_color__purple_pi5yi_212", so = "_color__pink_pi5yi_225", ao = "_color__brown_pi5yi_238", po = "_color__grey_pi5yi_251", uo = "_color__good_pi5yi_277", fo = "_color__average_pi5yi_290", yo = "_color__bad_pi5yi_303", mo = "_color__label_pi5yi_316", go = "_color__default_pi5yi_329", ho = "_color__caution_pi5yi_342", bo = "_color__danger_pi5yi_355", Co = "_color__transparent_pi5yi_368", ko = "_disabled_pi5yi_383", xo = "_selected_pi5yi_387", vo = "_flex_pi5yi_400", wo = "_flex__fluid_pi5yi_405", Ao = "_verticalAlignContent__top_pi5yi_409", Po = "_verticalAlignContent__middle_pi5yi_413", Bo = "_verticalAlignContent__bottom_pi5yi_417", Io = "_content_pi5yi_421", No = "_textMargin_pi5yi_426", o = {
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
  color__olive: io,
  color__green: no,
  color__teal: eo,
  color__blue: co,
  color__violet: lo,
  color__purple: ro,
  color__pink: so,
  color__brown: ao,
  color__grey: po,
  "color__light-grey": "_color__light-grey_pi5yi_264",
  color__good: uo,
  color__average: fo,
  color__bad: yo,
  color__label: mo,
  color__default: go,
  color__caution: ho,
  color__danger: bo,
  color__transparent: Co,
  disabled: ko,
  selected: xo,
  flex: vo,
  flex__fluid: wo,
  verticalAlignContent__top: Ao,
  verticalAlignContent__middle: Po,
  verticalAlignContent__bottom: Bo,
  content: Io,
  textMargin: No
}, b = (p) => {
  const {
    captureKeys: s = !0,
    children: a,
    circular: f,
    className: u,
    color: r,
    compact: C,
    content: y,
    disabled: t,
    ellipsis: c,
    fluid: i,
    icon: n,
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
  } = p, h = y || a;
  let _ = /* @__PURE__ */ e(
    "div",
    {
      className: N([
        o.button,
        i && o.fluid,
        t && o.disabled,
        x && o.selected,
        !!h && o.hasContent,
        f && o.circular,
        C && o.compact,
        m && o["iconPosition__" + m],
        v && o.flex,
        v && i && o.flex__fluid,
        v && o["verticalAlignContent__" + v],
        r && typeof r == "string" ? o["color__" + r] : o.color__default,
        u,
        j(P)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (l) => {
        !t && k && k(l);
      },
      onKeyDown: (l) => {
        if (s) {
          if (l.key === B.Space || l.key === B.Enter) {
            l.preventDefault(), !t && k && k(l);
            return;
          }
          l.key === B.Escape && l.preventDefault();
        }
      },
      ...q(P),
      children: /* @__PURE__ */ D("div", { className: o.content, children: [
        n && m !== "right" && /* @__PURE__ */ e(
          R,
          {
            name: n,
            color: d,
            rotation: w,
            spin: I
          }
        ),
        c ? /* @__PURE__ */ e("span", { className: N([o.ellipsis, n && o.textMargin]), children: h }) : h,
        n && m === "right" && /* @__PURE__ */ e(
          R,
          {
            name: n,
            color: d,
            rotation: w,
            spin: I
          }
        )
      ] })
    }
  );
  return g && (_ = /* @__PURE__ */ e(F, { content: g, position: A, children: _ })), _;
}, Ro = (p) => {
  const { checked: s, ...a } = p;
  return /* @__PURE__ */ e(
    b,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...a
    }
  );
};
b.Checkbox = Ro;
const Do = (p) => {
  const {
    children: s,
    color: a,
    confirmColor: f = "bad",
    confirmContent: u = "Confirm?",
    confirmIcon: r,
    ellipsis: C = !0,
    icon: y,
    onClick: t,
    ...c
  } = p, [i, n] = E(!1);
  return /* @__PURE__ */ e(
    b,
    {
      icon: i ? r : y,
      color: i ? f : a,
      onClick: (m) => {
        if (!i) {
          n(!0);
          return;
        }
        t == null || t(m), n(!1);
      },
      ...c,
      children: i ? u : s
    }
  );
};
b.Confirm = Do;
const Eo = (p) => {
  const {
    children: s,
    color: a = "default",
    content: f,
    currentValue: u,
    defaultValue: r,
    disabled: C,
    fluid: y,
    icon: t,
    iconRotation: c,
    iconSpin: i,
    maxLength: n,
    onCommit: d = () => null,
    placeholder: m,
    tooltip: w,
    tooltipPosition: I,
    ...k
  } = p, [x, g] = E(!1), A = K(), v = f || s, P = (_) => {
    const l = A.current;
    if (!l)
      return;
    l.value !== "" ? d(_, l.value) : r && d(_, r);
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
        y && o.fluid,
        o["color__" + a]
      ]),
      ...k,
      onClick: () => g(!0),
      children: [
        t && /* @__PURE__ */ e(R, { name: t, rotation: c, spin: i }),
        /* @__PURE__ */ e("div", { children: v }),
        /* @__PURE__ */ e(
          "input",
          {
            disabled: !!C,
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
  return w && (h = /* @__PURE__ */ e(F, { content: w, position: I, children: h })), h;
};
b.Input = Eo;
function Fo(p) {
  const { accept: s, multiple: a, onSelectFiles: f, ...u } = p, r = V(null);
  async function C(t) {
    const c = Array.from(t).map((i) => {
      const n = new FileReader();
      return new Promise((d) => {
        n.onload = () => d(n.result), n.readAsText(i);
      });
    });
    return await Promise.all(c);
  }
  async function y(t) {
    const c = t.target.files;
    if (c != null && c.length) {
      const i = await C(c);
      f(a ? i : i[0]);
    }
  }
  return /* @__PURE__ */ D(S, { children: [
    /* @__PURE__ */ e(b, { onClick: () => {
      var t;
      return (t = r.current) == null ? void 0 : t.click();
    }, ...u }),
    /* @__PURE__ */ e(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: r,
        accept: s,
        multiple: a,
        onChange: y
      }
    )
  ] });
}
b.File = Fo;
export {
  b as Button,
  Ro as ButtonCheckbox
};
