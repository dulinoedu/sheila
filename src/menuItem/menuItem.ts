import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, willPaint } from "@bake-js/-o-id/dom";
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
  #disabled;
  #internals;
  #value;

  get disabled() {
    return (this.#disabled ??= false);
  }

  @attributeChanged("disabled", booleanAttribute)
  @dispatchEvent("disabledChanged")
  @joinCut(setState)
  set disabled(value) {
    this.#disabled = value;
  }

  get value() {
    return (this.#value ??= "");
  }

  @attributeChanged("value")
  @dispatchEvent("valueChanged")
  set value(value) {
    this.#value = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click(":host(:not(:state(disabled))) *")
  click() {
    const init = { bubbles: true, cancelable: true, detail: this.value };
    const event = new CustomEvent("clicked", init);
    this.dispatchEvent(event);
    return this;
  }

  @willPaint
  [setState]() {
    this.disabled
      ? this.#internals.states.add("disabled")
      : this.#internals.states.delete("disabled");
    return this;
  }
}

export default MenuItem;
