import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-icon")
@paint(component, style)
class Icon extends Echo(HTMLElement) {
  #use;

  get use() {
    return (this.#use ??= "").toLowerCase();
  }

  @attributeChanged("use")
  @dispatchEvent("useChanged")
  @repaint
  set use(value) {
    this.#use = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host *")
  click() {
    const event = new CustomEvent("clicked");
    this.dispatchEvent(event);

    return this;
  }
}

export default Icon;
