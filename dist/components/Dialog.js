import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { Box as r } from "./Box.js";
import { Button as s } from "./Button.js";
const d = (t) => {
  const { title: e, onClose: i, children: c, width: l, height: h } = t;
  return /* @__PURE__ */ o("div", { className: "Dialog", children: /* @__PURE__ */ n(r, { className: "Dialog__content", width: l || "370px", height: h, children: [
    /* @__PURE__ */ n("div", { className: "Dialog__header", children: [
      /* @__PURE__ */ o("div", { className: "Dialog__title", children: e }),
      /* @__PURE__ */ o(r, { mr: 2, children: /* @__PURE__ */ o(
        s,
        {
          mr: "-3px",
          width: "26px",
          lineHeight: "22px",
          textAlign: "center",
          color: "transparent",
          icon: "window-close-o",
          tooltip: "Close",
          tooltipPosition: "bottom-start",
          onClick: i
        }
      ) })
    ] }),
    c
  ] }) });
}, a = (t) => {
  const { onClick: e, children: i } = t;
  return /* @__PURE__ */ o(
    s,
    {
      onClick: e,
      className: "Dialog__button",
      verticalAlignContent: "middle",
      children: i
    }
  );
};
d.Button = a;
const p = (t) => {
  const { documentName: e, onSave: i, onDiscard: c, onClose: l } = t;
  return /* @__PURE__ */ n(d, { title: "Notepad", onClose: l, children: [
    /* @__PURE__ */ n("div", { className: "Dialog__body", children: [
      "Do you want to save changes to ",
      e,
      "?"
    ] }),
    /* @__PURE__ */ n("div", { className: "Dialog__footer", children: [
      /* @__PURE__ */ o(a, { onClick: i, children: "Save" }),
      /* @__PURE__ */ o(a, { onClick: c, children: "Don't Save" }),
      /* @__PURE__ */ o(a, { onClick: l, children: "Cancel" })
    ] })
  ] });
};
export {
  d as Dialog,
  p as UnsavedChangesDialog
};
