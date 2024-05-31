import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { scale as d, keyOfMatchingRange as M, clamp01 as k } from "../common/math.js";
import { classes as p } from "../common/react.js";
import { AnimatedNumber as v } from "./AnimatedNumber.js";
import { Box as B, computeBoxClassName as j, computeBoxProps as V } from "./Box.js";
function w(h) {
  const {
    alertAfter: a,
    alertBefore: o,
    className: _,
    format: R,
    maxValue: c = 1,
    minValue: u = 1,
    ranges: s,
    size: y = 1,
    style: x,
    value: r,
    ...g
  } = h, G = d(r, u, c), f = k(G), n = s ? {} : { primary: [0, 1] };
  s && Object.keys(s).forEach((t) => {
    const l = s[t];
    n[t] = [
      d(l[0], u, c),
      d(l[1], u, c)
    ];
  });
  function N() {
    return a && o && r > a && r < o || a && r > a ? !0 : !!(o && r < o);
  }
  const C = N() && M(f, n);
  return /* @__PURE__ */ m(B, { inline: !0, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: p([
          "RoundGauge",
          _,
          j(g)
        ]),
        ...V({
          style: {
            fontSize: y + "em",
            ...x
          },
          ...g
        }),
        children: /* @__PURE__ */ m("svg", { viewBox: "0 0 100 50", children: [
          (a || o) && /* @__PURE__ */ e(
            "g",
            {
              className: p([
                "RoundGauge__alert",
                C ? `active RoundGauge__alert--${C}` : ""
              ]),
              children: /* @__PURE__ */ e("path", { d: "M48.211,14.578C48.55,13.9 49.242,13.472 50,13.472C50.758,13.472 51.45,13.9 51.789,14.578C54.793,20.587 60.795,32.589 63.553,38.106C63.863,38.726 63.83,39.462 63.465,40.051C63.101,40.641 62.457,41 61.764,41C55.996,41 44.004,41 38.236,41C37.543,41 36.899,40.641 36.535,40.051C36.17,39.462 36.137,38.726 36.447,38.106C39.205,32.589 45.207,20.587 48.211,14.578ZM50,34.417C51.426,34.417 52.583,35.574 52.583,37C52.583,38.426 51.426,39.583 50,39.583C48.574,39.583 47.417,38.426 47.417,37C47.417,35.574 48.574,34.417 50,34.417ZM50,32.75C50,32.75 53,31.805 53,22.25C53,20.594 51.656,19.25 50,19.25C48.344,19.25 47,20.594 47,22.25C47,31.805 50,32.75 50,32.75Z" })
            }
          ),
          /* @__PURE__ */ e("g", { children: /* @__PURE__ */ e("circle", { className: "RoundGauge__ringTrack", cx: "50", cy: "50", r: "45" }) }),
          /* @__PURE__ */ e("g", { children: Object.keys(n).map((t, l) => {
            const i = n[t];
            return /* @__PURE__ */ e(
              "circle",
              {
                className: `RoundGauge__ringFill RoundGauge--color--${t}`,
                style: {
                  strokeDashoffset: Math.max(
                    (2 - (i[1] - i[0])) * Math.PI * 50,
                    0
                  )
                },
                transform: `rotate(${180 + 180 * i[0]} 50 50)`,
                cx: "50",
                cy: "50",
                r: "45"
              },
              l
            );
          }) }),
          /* @__PURE__ */ m(
            "g",
            {
              className: "RoundGauge__needle",
              transform: `rotate(${f * 180 - 90} 50 50)`,
              children: [
                /* @__PURE__ */ e(
                  "polygon",
                  {
                    className: "RoundGauge__needleLine",
                    points: "46,50 50,0 54,50"
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    className: "RoundGauge__needleMiddle",
                    cx: "50",
                    cy: "50",
                    r: "8"
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ e(v, { value: r, format: R })
  ] });
}
export {
  w as RoundGauge
};
