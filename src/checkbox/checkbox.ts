import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import Echo from "@bake-js/-o-id/echo";
import { attributeChanged, define } from "@bake-js/-o-id";
import dispatchEvent from "../dispatchEvent"
import style from "./style"

@define("lxp-checkbox")
@paint(component, style)
class Checkbox extends Echo(HTMLElement) {
  #size;
  #gap;

  @attributeChanged("gap")
  @dispatchEvent("gapChanged")
  @repaint
  set gap(value) {
    this.#gap = value;
  }

  get gap() {
    return (this.#gap ??= "")
  }
  
  @attributeChanged("size")
  @dispatchEvent("sizeChanged")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get size() {
    return (this.#size ??= "")
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Checkbox;
