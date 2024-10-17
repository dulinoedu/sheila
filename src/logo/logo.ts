import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-logo")
@paint(component, style)
class Logo extends Echo(HTMLElement) {
  #src;
  #alt;

  get src() {
    return (this.#src ??= "");
  }

  @attributeChanged("src")
  @dispatchEvent("srcChanged")
  @repaint
  set src(value) {
    this.#src = value;
  }

  get alt() {
    return (this.#alt ??= "");
  }

  @attributeChanged("alt")
  @dispatchEvent("altChanged")
  @repaint
  set alt(value) {
    this.#alt = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Logo;
