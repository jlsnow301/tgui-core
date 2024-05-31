import { jsx as x } from "react/jsx-runtime";
import { classes as m } from "../common/react.js";
import { Box as n } from "./Box.js";
function B(e) {
  const { className: c, color: o, info: t, success: s, danger: r, ...i } = e;
  return /* @__PURE__ */ x(
    n,
    {
      className: m([
        "NoticeBox",
        o && "NoticeBox--color--" + o,
        t && "NoticeBox--type--info",
        s && "NoticeBox--type--success",
        r && "NoticeBox--type--danger",
        c
      ]),
      ...i
    }
  );
}
export {
  B as NoticeBox
};
