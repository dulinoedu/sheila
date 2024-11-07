import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint, willPaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-text")
@paint(component, style)
class Text extends Echo(HTMLElement) {
  #display;
  #color;
  #size;
  #weight;
  #value;
  #textalign;
  #alignself;

  get alignself() {
    return (this.#alignself ??= "none");
  }

  @attributeChanged("align")
  @dispatchEvent("alignChanged")
  set alignself(value) {
    this.#alignself = value;
  }

  get color() {
    return (this.#color ??= "");
  }

  @attributeChanged("color")
  @dispatchEvent("colorChanged")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get display() {
    return (this.#display ??= false);
  }

  @attributeChanged("display", booleanAttribute)
  @dispatchEvent("displayChanged")
  @repaint
  set display(value) {
    this.#display = value;
  }

  get size() {
    return this.#display
      ? `display-${(this.#size ??= "sm")}`
      : (this.#size ??= "sm");
  }

  @attributeChanged("size")
  @dispatchEvent("sizeChanged")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get weight() {
    return (this.#weight ??= "regular");
  }

  @attributeChanged("weight")
  @dispatchEvent("weightChanged")
  @repaint
  set weight(value) {
    this.#weight = value;
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  @dispatchEvent("valueChanged")
  set value(value) {
    this.#value = value;
  }

  get textalign() {
    return (this.#textalign ??= "none");
  }

  @attributeChanged("align")
  @dispatchEvent("alignChanged")
  set align(value) {
    this.#align = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("*")
  click() {
    const init = { bubbles: true, cancelable: true, detail: this.value };
    const event = new CustomEvent("clicked", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Text;
