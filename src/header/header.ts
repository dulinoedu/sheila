import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-header")
@paint(component, style)
class Header extends HTMLElement {
  #variant;

  get variant() {
    return (this.#variant ??= "transparent");
  }

  @attributeChanged("variant")
  @dispatchEvent("variantChanged")
  @repaint
  set variant(value) {
    this.#variant = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
