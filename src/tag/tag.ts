import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint, willPaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import joinCut from "../joinCut";
import component from "./component";
import { dispatchFormAction, setState } from "./interface";
import style from "./style";

@define("lxp-tag")
@paint(component, style)
class Tag extends Echo(HTMLElement) {
  #disabled;
  #internals;
  #size;
  #selected;
  #type;
  #value;
  #variant;

  get selected() {
    return (this.#selected ??= false);
  }

  @attributeChanged("selected", booleanAttribute)
  @dispatchEvent("selectedChanged")
  @repaint
  set selected(value) {
    this.#selected = value;
  }

  get disabled() {
    return (this.#disabled ??= false);
  }

  @attributeChanged("disabled", booleanAttribute)
  @dispatchEvent("disabledChanged")
  @repaint
  set disabled(value) {
    this.#disabled = value;
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

  @on.click(":host *")
  @repaint
  click() {
    console.log('teste')
    this.#selected = !this.selected;
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

export default Tag;
