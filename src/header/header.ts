import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component";
import style from "./style";

@define("lxp-header")
@paint(component, style)
class Header extends HTMLElement {
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

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
