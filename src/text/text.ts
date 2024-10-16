import { attributeChanged, define } from "@bake-js/-o-id";
import { dispatchFormAction, setState } from "./interface";
import { paint, repaint, willPaint } from "@bake-js/-o-id/dom";
import booleanAttribute from "../booleanAttribute";
import component from "./component";
import dispatchEvent from "../dispatchEvent";
import Echo from "@bake-js/-o-id/echo";
import joinCut from "../joinCut";
import style from "./style";

@define("lxp-text")
@paint(component, style)
class Text extends Echo(HTMLElement) {
  #display;
  #color;
  #variant;
  #hidden;
  #size;
  #font;
  #weight;

  get display() {
    return (this.#display ??= false);
  }

  @attributeChanged("display", booleanAttribute)
  @dispatchEvent("")
  @repaint
  set display(value) {
    this.#display = value;
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

  get variant() {
    return (this.#variant ??= "primary");
  }

  @attributeChanged("variant")
  @dispatchEvent("variantChanged")
  @repaint
  set variant(value) {
    this.#variant = value;
  }

  get hidden() {
    return (this.#hidden ??= false);
  }

  @attributeChanged("hidden", booleanAttribute)
  @dispatchEvent("hiddened")
  @joinCut(setState)
  set hidden(value) {
    this.#hidden = value;
  }

  get size() {
    return this.#display
      ? `display-${(this.#size ??= "sm")}`
      : (this.#size ??= "sm");
  }

  @attributeChanged("size")
  @dispatchEvent("sized")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get weight() {
    return (this.#weight ??= "regular");
  }

  @attributeChanged("weight")
  @dispatchEvent("")
  @repaint
  set weight(value) {
    this.#weight = value;
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  [setState]() {
    this.hidden
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
  }
}

export default Text;
