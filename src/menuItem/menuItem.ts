import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import { setState } from "./interface";
import style from "./style";

@define("lxp-menu-item")
@paint(component, style)
class MenuItem extends Echo(HTMLElement) {
  #href;

  get href() {
    return (this.#href ??= "");
  }

  @attributeChanged("href")
  @dispatchEvent("hrefChanged")
  @repaint
  set href(value) {
    this.#href = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default MenuItem;
