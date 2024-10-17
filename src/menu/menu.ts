import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import { setState } from "./interface";
import style from "./style";

@define("lxp-menu")
@paint(component, style)
class MenuItem extends Echo(HTMLElement) {
  #hidden;
  #internals;

  get hidden() {
    return (this.#hidden ??= false);
  }

  @attributeChanged("hidden", booleanAttribute)
  @dispatchEvent("hiddenChanged")
  set hidden(value) {
    this.#hidden = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  [setState]() {
    this.hidden
      ? this.#internals.states.add("hidden")
      : this.#internals.states.delete("hidden");
    return this;
  }
}

export default MenuItem;
