import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, willPaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on, { stop } from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import joinCut from "../joinCut";
import component from "./component";
import { onSelect, setDisplay } from "./interface";
import style from "./style";

@define("lxp-menu")
@paint(component, style)
class Menu extends Echo(HTMLElement) {
  #visible;
  #internals;

  get visible() {
    return (this.#visible ??= false);
  }

  @attributeChanged("visible", booleanAttribute)
  @dispatchEvent("visibleChanged")
  @joinCut(setDisplay)
  set visible(value) {
    this.#visible = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  hide() {
    const init = { bubbles: true, cancelable: true };
    const event = new CustomEvent("hidded", init);
    this.removeAttribute("visible");
    this.dispatchEvent(event);
    return this;
  }

  show() {
    const init = { bubbles: true, cancelable: true };
    const event = new CustomEvent("hidded", init);
    this.setAttribute("visible", "true");
    this.dispatchEvent(event);
    return this;
  }

  @on.clicked("lxp-menu-item", stop)
  [onSelect]({ detail }) {
    const init = { bubbles: true, cancelable: true, detail };
    const event = new CustomEvent("selected", init);
    this.dispatchEvent(event);
    return this;
  }

  @willPaint
  [setDisplay]() {
    this.visible
      ? this.style.removeProperty("display")
      : this.style.setProperty("display", "none");
    return this;
  }
}

export default Menu;
