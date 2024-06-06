import '../assets/NumberInput.css';var E = Object.defineProperty;
var I = (c, d, e) => d in c ? E(c, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[d] = e;
var l = (c, d, e) => (I(c, typeof d != "symbol" ? d + "" : d, e), e);
import { jsxs as S, jsx as g } from "react/jsx-runtime";
import { KEY as x } from "../common/keys.js";
import { clamp as h } from "../common/math.js";
import { classes as D } from "../common/react.js";
import { Component as T, createRef as F } from "react";
import { AnimatedNumber as M } from "./AnimatedNumber.js";
import { Box as w } from "./Box.js";
const R = "_numberInput_x4pb3_13", B = "_fluid_x4pb3_29", K = "_content_x4pb3_33", L = "_barContainer_x4pb3_37", Y = "_bar_x4pb3_37", j = "_inner_x4pb3_54", p = {
  numberInput: R,
  fluid: B,
  content: K,
  barContainer: L,
  bar: Y,
  inner: j
};
class $ extends T {
  constructor(e) {
    super(e);
    // Ref to the input field to set focus & highlight
    l(this, "inputRef", F());
    // After this time has elapsed we are in drag mode so no editing when dragging ends
    l(this, "dragTimeout");
    // Call onDrag at this interval
    l(this, "dragInterval");
    // default values for the number input state
    l(this, "state", {
      editing: !1,
      dragging: !1,
      currentValue: 0,
      previousValue: 0,
      origin: 0
    });
    l(this, "handleDragStart", (e) => {
      const { value: a, disabled: u } = this.props, { editing: i } = this.state;
      if (u || i)
        return;
      document.body.style["pointer-events"] = "none";
      const n = parseFloat(a.toString());
      this.setState({
        dragging: !1,
        origin: e.screenY,
        currentValue: n,
        previousValue: n
      }), this.dragTimeout = setTimeout(() => {
        this.setState({
          dragging: !0
        });
      }, 250), this.dragInterval = setInterval(() => {
        const { dragging: o, currentValue: s, previousValue: t } = this.state, { onDrag: r } = this.props;
        o && s !== t && (this.setState({
          previousValue: s
        }), r == null || r(s));
      }, 400), document.addEventListener("mousemove", this.handleDragMove), document.addEventListener("mouseup", this.handleDragEnd);
    });
    l(this, "handleDragMove", (e) => {
      const { minValue: a, maxValue: u, step: i, stepPixelSize: n, disabled: o } = this.props;
      o || this.setState((s) => {
        const t = { ...s }, r = t.origin - e.screenY;
        if (s.dragging) {
          const f = isFinite(a) ? a % i : 0;
          t.currentValue = h(
            t.currentValue + r * i / (n || 1),
            a - i,
            u + i
          ), t.currentValue = h(
            t.currentValue - t.currentValue % i + f,
            a,
            u
          ), t.origin = e.screenY;
        } else
          Math.abs(r) > 4 && (t.dragging = !0);
        return t;
      });
    });
    l(this, "handleDragEnd", (e) => {
      const { dragging: a, currentValue: u } = this.state, { onDrag: i, onChange: n, disabled: o } = this.props;
      if (!o) {
        if (document.body.style["pointer-events"] = "auto", clearInterval(this.dragInterval), clearTimeout(this.dragTimeout), this.setState({
          dragging: !1,
          editing: !a,
          previousValue: u
        }), a)
          n == null || n(u), i == null || i(u);
        else if (this.inputRef) {
          const s = this.inputRef.current;
          s && (s.value = `${u}`, setTimeout(() => {
            s.focus(), s.select();
          }, 1));
        }
        document.removeEventListener("mousemove", this.handleDragMove), document.removeEventListener("mouseup", this.handleDragEnd);
      }
    });
    l(this, "handleBlur", (e) => {
      const { editing: a, previousValue: u } = this.state, { minValue: i, maxValue: n, onChange: o, onDrag: s, disabled: t } = this.props;
      if (t || !a)
        return;
      const r = h(
        parseFloat(e.target.value),
        i,
        n
      );
      if (isNaN(r)) {
        this.setState({
          editing: !1
        });
        return;
      }
      this.setState({
        editing: !1,
        currentValue: r,
        previousValue: r
      }), u !== r && (o == null || o(r), s == null || s(r));
    });
    l(this, "handleKeyDown", (e) => {
      const { minValue: a, maxValue: u, onChange: i, onDrag: n, disabled: o } = this.props;
      if (o)
        return;
      const { previousValue: s } = this.state;
      if (e.key === x.Enter) {
        const t = h(
          parseFloat(e.currentTarget.value),
          a,
          u
        );
        if (isNaN(t)) {
          this.setState({
            editing: !1
          });
          return;
        }
        this.setState({
          editing: !1,
          currentValue: t,
          previousValue: t
        }), s !== t && (i == null || i(t), n == null || n(t));
      } else
        e.key === x.Escape && this.setState({
          editing: !1
        });
    });
  }
  componentDidMount() {
    let e = parseFloat(this.props.value.toString());
    this.setState({
      currentValue: e,
      previousValue: e
    });
  }
  render() {
    const { dragging: e, editing: a, currentValue: u } = this.state, {
      className: i,
      fluid: n,
      animated: o,
      unit: s,
      value: t,
      minValue: r,
      maxValue: f,
      height: v,
      width: y,
      lineHeight: b,
      fontSize: _,
      format: V
    } = this.props;
    let m = parseFloat(t.toString());
    e && (m = u);
    const N = /* @__PURE__ */ S("div", { className: p.content, children: [
      o && !e ? /* @__PURE__ */ g(M, { value: m, format: V }) : V ? V(m) : m,
      s ? " " + s : ""
    ] });
    return /* @__PURE__ */ S(
      w,
      {
        className: D([
          p.numberInput,
          n && p.fluid,
          i
        ]),
        minWidth: y,
        minHeight: v,
        lineHeight: b,
        fontSize: _,
        onMouseDown: this.handleDragStart,
        children: [
          /* @__PURE__ */ g("div", { className: p.barContainer, children: /* @__PURE__ */ g(
            "div",
            {
              className: p.bar,
              style: {
                height: h(
                  (m - r) / (f - r) * 100,
                  0,
                  100
                ) + "%"
              }
            }
          ) }),
          N,
          /* @__PURE__ */ g(
            "input",
            {
              ref: this.inputRef,
              className: p.inner,
              style: {
                display: a ? "inline" : "none",
                height: v,
                lineHeight: b,
                fontSize: _
              },
              onBlur: this.handleBlur,
              onKeyDown: this.handleKeyDown
            }
          )
        ]
      }
    );
  }
}
export {
  $ as NumberInput
};
