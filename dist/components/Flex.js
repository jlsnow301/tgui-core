import { jsx as a } from "react/jsx-runtime";
import { classes as n } from "../common/react.js";
import { computeBoxClassName as c, computeBoxProps as u, unit as p } from "./Box.js";
const N = (e) => n([
  "Flex",
  e.inline && "Flex--inline",
  c(e)
]), d = (e) => {
  const { className: o, direction: s, wrap: t, align: i, justify: r, inline: m, ...l } = e;
  return u({
    style: {
      ...l.style,
      flexDirection: s,
      flexWrap: t === !0 ? "wrap" : t,
      alignItems: i,
      justifyContent: r
    },
    ...l
  });
}, F = (e) => {
  const { className: o, ...s } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      className: n([o, N(s)]),
      ...d(s)
    }
  );
}, v = (e) => n(["Flex__item", c(e)]), y = (e) => {
  const { className: o, style: s, grow: t, order: i, shrink: r, basis: m, align: l, ...x } = e, f = m ?? // IE11: Set basis to specified width if it's known, which fixes certain
  // bugs when rendering tables inside the flex.
  e.width ?? // If grow is used, basis should be set to 0 to be consistent with
  // flex css shorthand `flex: 1`.
  (t !== void 0 ? 0 : void 0);
  return u({
    style: {
      ...s,
      flexGrow: t !== void 0 && Number(t),
      flexShrink: r !== void 0 && Number(r),
      flexBasis: p(f),
      order: i,
      alignSelf: l
    },
    ...x
  });
}, g = (e) => {
  const { className: o, ...s } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      className: n([o, v(e)]),
      ...y(s)
    }
  );
};
F.Item = g;
export {
  F as Flex,
  N as computeFlexClassName,
  v as computeFlexItemClassName,
  y as computeFlexItemProps,
  d as computeFlexProps
};
