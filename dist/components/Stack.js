import { jsx as a } from "react/jsx-runtime";
import { classes as i } from "../common/react.js";
import { computeFlexClassName as k, computeFlexProps as v, computeFlexItemClassName as o, computeFlexItemProps as m } from "./Flex.js";
function n(r) {
  const { className: c, vertical: e, fill: t, reverse: s, zebra: l, ...d } = r, S = e ? "column" : "row", f = s ? "-reverse" : "";
  return /* @__PURE__ */ a(
    "div",
    {
      className: i([
        "Stack",
        t && "Stack--fill",
        e ? "Stack--vertical" : "Stack--horizontal",
        l && "Stack--zebra",
        s && `Stack--reverse${e ? "--vertical" : ""}`,
        c,
        k(r)
      ]),
      ...v({
        direction: `${S}${f}`,
        ...d
      })
    }
  );
}
function u(r) {
  const { className: c, innerRef: e, ...t } = r;
  return /* @__PURE__ */ a(
    "div",
    {
      className: i([
        "Stack__item",
        c,
        o(t)
      ]),
      ref: e,
      ...m(t)
    }
  );
}
n.Item = u;
function p(r) {
  const { className: c, hidden: e, ...t } = r;
  return /* @__PURE__ */ a(
    "div",
    {
      className: i([
        "Stack__item",
        "Stack__divider",
        e && "Stack__divider--hidden",
        c,
        o(t)
      ]),
      ...m(t)
    }
  );
}
n.Divider = p;
export {
  n as Stack
};
