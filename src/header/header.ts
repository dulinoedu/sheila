import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-header")
@paint(component, style)
class Header extends Echo(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
