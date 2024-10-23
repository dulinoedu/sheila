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
  #selected;
  #src;
  #value;

  get selected() {
    return (this.#selected ??= false);
  }

  @attributeChanged("selected", booleanAttribute)
  @dispatchEvent("selectedChanged")
  @repaint
  set selected(value) {
    this.#selected = value;
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  @dispatchEvent("valueChanged")
  set value(value) {
    this.#value = value;
  }

  get src() {
    return (this.#src ??= "");
  }

  @attributeChanged("src")
  @dispatchEvent("srcChanged")
  @repaint
  set src(value) {
    this.#src = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("lxp-text")
  @repaint
  click() {
    this.#selected = !this.selected;
    const init = { bubbles: true, cancelable: true, detail: this.value };
    const event = new CustomEvent("clicked", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Header;
