import { jsx as e, jsxs as S } from "react/jsx-runtime";
import { keyOfMatchingRange as j, scale as i } from "../common/math.js";
import { classes as E } from "../common/react.js";
import { computeBoxClassName as T, computeBoxProps as I } from "./Box.js";
import { DraggableControl as O } from "./DraggableControl.js";
function J(c) {
  const {
    // Draggable props (passthrough)
    animated: t,
    format: m,
    maxValue: a,
    minValue: o,
    onChange: d,
    onDrag: u,
    step: p,
    stepPixelSize: g,
    suppressFlicker: _,
    unclamped: b,
    unit: f,
    value: h,
    // Own props
    bipolar: l,
    children: R,
    className: v,
    color: x,
    fillValue: r,
    ranges: K = {},
    size: N = 1,
    style: y,
    ...s
  } = c;
  return /* @__PURE__ */ e(
    O,
    {
      dragMatrix: [0, -1],
      animated: t,
      format: m,
      maxValue: a,
      minValue: o,
      onChange: d,
      onDrag: u,
      step: p,
      stepPixelSize: g,
      suppressFlicker: _,
      unclamped: b,
      unit: f,
      value: h,
      children: (V) => {
        const {
          displayElement: D,
          displayValue: n,
          dragging: M,
          handleDragStart: k,
          inputElement: B,
          value: P
        } = V, C = i(
          r ?? n,
          o,
          a
        ), F = i(n, o, a), w = x || j(r ?? P, K) || "default", z = Math.min((F - 0.5) * 270, 225);
        return /* @__PURE__ */ S(
          "div",
          {
            className: E([
              "Knob",
              "Knob--color--" + w,
              l && "Knob--bipolar",
              v,
              T(s)
            ]),
            ...I({
              style: {
                fontSize: N + "em",
                ...y
              },
              ...s
            }),
            onMouseDown: k,
            children: [
              /* @__PURE__ */ e("div", { className: "Knob__circle", children: /* @__PURE__ */ e(
                "div",
                {
                  className: "Knob__cursorBox",
                  style: {
                    transform: `rotate(${z}deg)`
                  },
                  children: /* @__PURE__ */ e("div", { className: "Knob__cursor" })
                }
              ) }),
              M && /* @__PURE__ */ e("div", { className: "Knob__popupValue", children: D }),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: "Knob__ring Knob__ringTrackPivot",
                  viewBox: "0 0 100 100",
                  children: /* @__PURE__ */ e("circle", { className: "Knob__ringTrack", cx: "50", cy: "50", r: "50" })
                }
              ),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: "Knob__ring Knob__ringFillPivot",
                  viewBox: "0 0 100 100",
                  children: /* @__PURE__ */ e(
                    "circle",
                    {
                      className: "Knob__ringFill",
                      style: {
                        strokeDashoffset: Math.max(
                          ((l ? 2.75 : 2) - C * 1.5) * Math.PI * 50,
                          0
                        )
                      },
                      cx: "50",
                      cy: "50",
                      r: "50"
                    }
                  )
                }
              ),
              B
            ]
          }
        );
      }
    }
  );
}
export {
  J as Knob
};
