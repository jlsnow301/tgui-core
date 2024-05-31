import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { Box as t } from "./Box.js";
const s = (e) => /* @__PURE__ */ i(t, { style: e.style, children: [
  /* @__PURE__ */ i(t, { className: "Section__title", style: e.titleStyle, children: [
    /* @__PURE__ */ l(t, { className: "Section__titleText", style: e.textStyle, children: e.title }),
    /* @__PURE__ */ l("div", { className: "Section__buttons", children: e.titleSubtext })
  ] }),
  /* @__PURE__ */ l(t, { className: "Section__rest", children: /* @__PURE__ */ l(t, { className: "Section__content", children: e.children }) })
] });
export {
  s as StyleableSection
};
