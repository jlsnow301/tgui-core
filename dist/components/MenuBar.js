var C = Object.defineProperty;
var x = (r, e, n) => e in r ? C(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var h = (r, e, n) => (x(r, typeof e != "symbol" ? e + "" : e, n), n);
import { jsx as o, jsxs as B } from "react/jsx-runtime";
import { classes as M } from "../common/react.js";
import { Component as f, createRef as N } from "react";
import { Box as u } from "./Box.js";
import { Icon as g } from "./Icon.js";
class I extends f {
  constructor(n) {
    super(n);
    h(this, "handleClick");
    this.handleClick = (t) => {
      this.props.menuRef.current && (this.props.menuRef.current.contains(t.target) || this.props.onOutsideClick());
    };
  }
  componentWillMount() {
    window.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }
  render() {
    const { width: n, children: t } = this.props;
    return /* @__PURE__ */ o(
      "div",
      {
        className: "MenuBar__menu",
        style: {
          width: n
        },
        children: t
      }
    );
  }
}
class O extends f {
  constructor(n) {
    super(n);
    h(this, "menuRef");
    this.menuRef = N();
  }
  render() {
    const { props: n } = this, {
      open: t,
      openWidth: s,
      children: c,
      disabled: i,
      display: a,
      onMouseOver: l,
      onClick: m,
      onOutsideClick: p,
      ..._
    } = n, { className: k, ...v } = _;
    return /* @__PURE__ */ B("div", { ref: this.menuRef, children: [
      /* @__PURE__ */ o(
        u,
        {
          className: M([
            "MenuBar__MenuBarButton",
            "MenuBar__font",
            "MenuBar__hover",
            k
          ]),
          ...v,
          onClick: i ? () => null : m,
          onMouseOver: l,
          children: /* @__PURE__ */ o("span", { className: "MenuBar__MenuBarButton-text", children: a })
        }
      ),
      t && /* @__PURE__ */ o(
        I,
        {
          width: s,
          menuRef: this.menuRef,
          onOutsideClick: p,
          children: c
        }
      )
    ] });
  }
}
const d = (r) => {
  const {
    entry: e,
    children: n,
    openWidth: t,
    display: s,
    setOpenMenuBar: c,
    openMenuBar: i,
    setOpenOnHover: a,
    openOnHover: l,
    disabled: m,
    className: p
  } = r;
  return /* @__PURE__ */ o(
    O,
    {
      openWidth: t,
      display: s,
      disabled: m,
      open: i === e,
      className: p,
      onClick: () => {
        c(i === e ? null : e), a(!l);
      },
      onOutsideClick: () => {
        c(null), a(!1);
      },
      onMouseOver: () => {
        l && c(e);
      },
      children: n
    }
  );
}, w = (r) => {
  const { value: e, displayText: n, onClick: t, checked: s } = r;
  return /* @__PURE__ */ B(
    u,
    {
      className: M([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__MenuItemToggle",
        "MenuBar__hover"
      ]),
      onClick: () => t(e),
      children: [
        /* @__PURE__ */ o("div", { className: "MenuBar__MenuItemToggle__check", children: s && /* @__PURE__ */ o(g, { size: 1.3, name: "check" }) }),
        n
      ]
    }
  );
};
d.MenuItemToggle = w;
const R = (r) => {
  const { value: e, displayText: n, onClick: t } = r;
  return /* @__PURE__ */ o(
    u,
    {
      className: M([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__hover"
      ]),
      onClick: () => t(e),
      children: n
    }
  );
};
d.MenuItem = R;
const y = () => /* @__PURE__ */ o("div", { className: "MenuBar__Separator" });
d.Separator = y;
const T = (r) => {
  const { children: e } = r;
  return /* @__PURE__ */ o(u, { className: "MenuBar", children: e });
};
T.Dropdown = d;
export {
  d as Dropdown,
  T as MenuBar
};
