import { jsx as m } from "react/jsx-runtime";
import { classes as l } from "../common/react.js";
import { computeBoxProps as p, computeBoxClassName as N } from "./Box.js";
const f = /-o$/, d = (c) => {
  const { name: s, size: o, spin: a, className: u, rotation: n, ...e } = c, r = e.style || {};
  o && (r.fontSize = o * 100 + "%"), n && (r.transform = `rotate(${n}deg)`), e.style = r;
  const x = p(e);
  let t = "";
  if (s.startsWith("tg-"))
    t = s;
  else {
    const I = f.test(s), i = s.replace(f, ""), S = !i.startsWith("fa-");
    t = I ? "far " : "fas ", S && (t += "fa-"), t += i, a && (t += " fa-spin");
  }
  return /* @__PURE__ */ m(
    "i",
    {
      className: l([
        "Icon",
        t,
        u,
        N(e)
      ]),
      ...x
    }
  );
}, g = (c) => {
  const { className: s, children: o, ...a } = c;
  return /* @__PURE__ */ m(
    "span",
    {
      className: l(["IconStack", s, N(a)]),
      ...p(a),
      children: o
    }
  );
};
d.Stack = g;
export {
  d as Icon,
  g as IconStack
};
