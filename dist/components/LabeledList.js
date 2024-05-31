import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { classes as o } from "../common/react.js";
import { Box as r, unit as x } from "./Box.js";
import { Divider as N } from "./Divider.js";
import { Tooltip as u } from "./Tooltip.js";
const b = (l) => {
  const { children: t } = l;
  return /* @__PURE__ */ e("table", { className: "LabeledList", children: t });
}, v = (l) => {
  const {
    className: t,
    label: a,
    labelColor: L = "label",
    labelWrap: m,
    color: p,
    textAlign: _,
    buttons: s,
    content: h,
    children: f,
    verticalAlign: d = "baseline",
    tooltip: n
  } = l;
  let i;
  a && (i = a, typeof a == "string" && (i += ":")), n !== void 0 && (i = /* @__PURE__ */ e(u, { content: n, children: /* @__PURE__ */ e(
    r,
    {
      as: "span",
      style: {
        borderBottom: "2px dotted rgba(255, 255, 255, 0.8)"
      },
      children: i
    }
  ) }));
  let g = /* @__PURE__ */ e(
    r,
    {
      as: "td",
      color: L,
      className: o([
        "LabeledList__cell",
        // Kinda flipped because we want nowrap as default. Cleaner CSS this way though.
        !m && "LabeledList__label--nowrap"
      ]),
      verticalAlign: d,
      children: i
    }
  );
  return /* @__PURE__ */ c("tr", { className: o(["LabeledList__row", t]), children: [
    g,
    /* @__PURE__ */ c(
      r,
      {
        as: "td",
        color: p,
        textAlign: _,
        className: o(["LabeledList__cell", "LabeledList__content"]),
        colSpan: s ? void 0 : 2,
        verticalAlign: d,
        children: [
          h,
          f
        ]
      }
    ),
    s && /* @__PURE__ */ e("td", { className: "LabeledList__cell LabeledList__buttons", children: s })
  ] });
}, w = (l) => {
  const t = l.size ? x(Math.max(0, l.size - 1)) : 0;
  return /* @__PURE__ */ e("tr", { className: "LabeledList__row", children: /* @__PURE__ */ e(
    "td",
    {
      colSpan: 3,
      style: {
        paddingTop: t,
        paddingBottom: t
      },
      children: /* @__PURE__ */ e(N, {})
    }
  ) });
};
b.Item = v;
b.Divider = w;
export {
  b as LabeledList
};
