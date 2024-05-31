var E = Object.defineProperty;
var x = (c, d, e) => d in c ? E(c, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[d] = e;
var o = (c, d, e) => (x(c, typeof d != "symbol" ? d + "" : d, e), e);
import { jsxs as N, jsx as h } from "react/jsx-runtime";
import { KEY as S } from "../common/keys.js";
import { clamp as m } from "../common/math.js";
import { classes as D } from "../common/react.js";
import { Component as _, createRef as T } from "react";
import { AnimatedNumber as F } from "./AnimatedNumber.js";
import { Box as M } from "./Box.js";
class z extends _ {
  constructor(e) {
    super(e);
    // Ref to the input field to set focus & highlight
    o(this, "inputRef", T());
    // After this time has elapsed we are in drag mode so no editing when dragging ends
    o(this, "dragTimeout");
    // Call onDrag at this interval
    o(this, "dragInterval");
    // default values for the number input state
    o(this, "state", {
      editing: !1,
      dragging: !1,
      currentValue: 0,
      previousValue: 0,
      origin: 0
    });
    o(this, "handleDragStart", (e) => {
      const { value: n, disabled: u } = this.props, { editing: i } = this.state;
      if (u || i)
        return;
      document.body.style["pointer-events"] = "none";
      const a = parseFloat(n.toString());
      this.setState({
        dragging: !1,
        origin: e.screenY,
        currentValue: a,
        previousValue: a
      }), this.dragTimeout = setTimeout(() => {
        this.setState({
          dragging: !0
        });
      }, 250), this.dragInterval = setInterval(() => {
        const { dragging: l, currentValue: s, previousValue: t } = this.state, { onDrag: r } = this.props;
        l && s !== t && (this.setState({
          previousValue: s
        }), r == null || r(s));
      }, 400), document.addEventListener("mousemove", this.handleDragMove), document.addEventListener("mouseup", this.handleDragEnd);
    });
    o(this, "handleDragMove", (e) => {
      const { minValue: n, maxValue: u, step: i, stepPixelSize: a, disabled: l } = this.props;
      l || this.setState((s) => {
        const t = { ...s }, r = t.origin - e.screenY;
        if (s.dragging) {
          const g = isFinite(n) ? n % i : 0;
          t.currentValue = m(
            t.currentValue + r * i / (a || 1),
            n - i,
            u + i
          ), t.currentValue = m(
            t.currentValue - t.currentValue % i + g,
            n,
            u
          ), t.origin = e.screenY;
        } else
          Math.abs(r) > 4 && (t.dragging = !0);
        return t;
      });
    });
    o(this, "handleDragEnd", (e) => {
      const { dragging: n, currentValue: u } = this.state, { onDrag: i, onChange: a, disabled: l } = this.props;
      if (!l) {
        if (document.body.style["pointer-events"] = "auto", clearInterval(this.dragInterval), clearTimeout(this.dragTimeout), this.setState({
          dragging: !1,
          editing: !n,
          previousValue: u
        }), n)
          a == null || a(u), i == null || i(u);
        else if (this.inputRef) {
          const s = this.inputRef.current;
          s && (s.value = `${u}`, setTimeout(() => {
            s.focus(), s.select();
          }, 1));
        }
        document.removeEventListener("mousemove", this.handleDragMove), document.removeEventListener("mouseup", this.handleDragEnd);
      }
    });
    o(this, "handleBlur", (e) => {
      const { editing: n, previousValue: u } = this.state, { minValue: i, maxValue: a, onChange: l, onDrag: s, disabled: t } = this.props;
      if (t || !n)
        return;
      const r = m(
        parseFloat(e.target.value),
        i,
        a
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
      }), u !== r && (l == null || l(r), s == null || s(r));
    });
    o(this, "handleKeyDown", (e) => {
      const { minValue: n, maxValue: u, onChange: i, onDrag: a, disabled: l } = this.props;
      if (l)
        return;
      const { previousValue: s } = this.state;
      if (e.key === S.Enter) {
        const t = m(
          parseFloat(e.currentTarget.value),
          n,
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
        }), s !== t && (i == null || i(t), a == null || a(t));
      } else
        e.key === S.Escape && this.setState({
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
    const { dragging: e, editing: n, currentValue: u } = this.state, {
      className: i,
      fluid: a,
      animated: l,
      unit: s,
      value: t,
      minValue: r,
      maxValue: g,
      height: V,
      width: y,
      lineHeight: v,
      fontSize: b,
      format: f
    } = this.props;
    let p = parseFloat(t.toString());
    e && (p = u);
    const I = /* @__PURE__ */ N("div", { className: "NumberInput__content", children: [
      l && !e ? /* @__PURE__ */ h(F, { value: p, format: f }) : f ? f(p) : p,
      s ? " " + s : ""
    ] });
    return /* @__PURE__ */ N(
      M,
      {
        className: D([
          "NumberInput",
          a && "NumberInput--fluid",
          i
        ]),
        minWidth: y,
        minHeight: V,
        lineHeight: v,
        fontSize: b,
        onMouseDown: this.handleDragStart,
        children: [
          /* @__PURE__ */ h("div", { className: "NumberInput__barContainer", children: /* @__PURE__ */ h(
            "div",
            {
              className: "NumberInput__bar",
              style: {
                height: m(
                  (p - r) / (g - r) * 100,
                  0,
                  100
                ) + "%"
              }
            }
          ) }),
          I,
          /* @__PURE__ */ h(
            "input",
            {
              ref: this.inputRef,
              className: "NumberInput__input",
              style: {
                display: n ? "inline" : "none",
                height: V,
                lineHeight: v,
                fontSize: b
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
  z as NumberInput
};
