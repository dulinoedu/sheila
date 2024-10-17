import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import joinCut from "../joinCut";
import component from "./component";
import { setState } from "./interface";
import style from "./style";

@define("lxp-menu-item")
@paint(component, style)
class MenuItem extends Echo(HTMLElement) {
  #href;
  #hover;
  #internals;

  get hover() {
    return (this.#hover ??= false);
  }

  @attributeChanged("hover", booleanAttribute)
  @dispatchEvent("hoverChanged")
  @joinCut(setState)
  set hover(value) {
    this.#hover = value;
  }

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
    this.#internals = this.attachInternals();
  }

  [setState]() {
    this.hover
      ? this.#internals.states.add("hover")
      : this.#internals.states.delete("hover");
    return this;
  }
}

export default MenuItem;
