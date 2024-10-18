import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-checkbox")
@paint(component, style)
class Checkbox extends Echo(HTMLElement) {
  #selected;
  #color;

  get color() {
    return (this.#color ??= "");
  }

  @attributeChanged("color")
  @dispatchEvent("colorChanged")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get selected() {
    return (this.#selected ??= "false");
  }

  @attributeChanged("selected")
  @dispatchEvent("selectedChanged")
  @repaint
  set selected(value) {
    this.#selected = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host *")
  @repaint
  click() {
    this.#selected = !this.selected;
    this.dispatchEvent(new CustomEvent("changed", { detail: this.selected }));
  }
}

export default Checkbox;
