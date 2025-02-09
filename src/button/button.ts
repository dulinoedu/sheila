import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint, willPaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on, { stop } from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import joinCut from "../joinCut";
import component from "./component";
import { dispatchFormAction, setState } from "./interface";
import style from "./style";

@define("lxp-button")
@paint(component, style)
class Button extends Echo(HTMLElement) {
  #disabled;
  #internals;
  #label;
  #size;
  #type;
  #value;
  #variant;
  #height;
  #width;

  get disabled() {
    return (this.#disabled ??= false);
  }

  @attributeChanged("disabled", booleanAttribute)
  @dispatchEvent("disabledChanged")
  @repaint
  set disabled(value) {
    this.#disabled = value;
  }

  get label() {
    return (this.#label ??= "Botão");
  }

  @attributeChanged("label")
  @dispatchEvent("labelChanged")
  @repaint
  set label(value) {
    this.#label = value;
  }

  get size() {
    return (this.#size ??= "medium");
  }

  @attributeChanged("size")
  @dispatchEvent("sizeChanged")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get width() {
    return (this.#width ??= "");
  }

  @attributeChanged("width")
  @dispatchEvent("widthChanged")
  @repaint
  set width(value) {
    this.#width = value;
  }

  get height() {
    return (this.#height ??= "");
  }

  @attributeChanged("height")
  @dispatchEvent("heightChanged")
  @repaint
  set height(value) {
    this.#height = value;
  }

  get type() {
    return (this.#type ??= "submit");
  }

  @attributeChanged("type")
  @dispatchEvent("typeChanged")
  @repaint
  set type(value) {
    this.#type = value;
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  @dispatchEvent("valueChanged")
  set value(value) {
    this.#value = value;
  }

  get variant() {
    return (this.#variant ??= "primary-solid");
  }

  @attributeChanged("variant")
  @dispatchEvent("variantChanged")
  @repaint
  set variant(value) {
    this.#variant = value;
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click(":host(:not(disabled)) *")
  @on.clicked("lxp-icon", stop)
  @on.clicked("lxp-text", stop)
  @joinCut(dispatchFormAction)
  click() {
    const init = { bubbles: true, cancelable: true, detail: this.value };
    const event = new CustomEvent("clicked", init);
    this.dispatchEvent(event);
    return this;
  }

  [dispatchFormAction]() {
    switch (this.type) {
      case "submit":
        this.#internals.form?.requestSubmit();
        break;
      case "reset":
        this.#internals.form?.reset();
        break;
    }
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

export default Button;
