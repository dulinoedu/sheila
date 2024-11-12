import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-logo")
@paint(component, style)
class Logo extends Echo(HTMLElement) {
  #alt;
  #loading;
  #src;
  #srcfallback;

  get srcfallback() {
    return (this.#srcfallback ??= "");
  }

  @attributeChanged("src-fallback")
  @dispatchEvent("srcfallbackChanged")
  @repaint
  set srcfallback(value) {
    this.#srcfallback = value;
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

  get loading() {
    return (this.#loading ??= "eager");
  }

  @attributeChanged("loading")
  @dispatchEvent("loadingChanged")
  @repaint
  set loading(value) {
    this.#loading = value;
  }

  get src() {
    return (this.#src ??= "");
  }

  @attributeChanged("src")
  @dispatchEvent("srcChanged")
  @repaint
  set src(value) {
    this.#src = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host img")
  click() {
    const init = { bubbles: true, cancelable: true };
    const event = new CustomEvent("clicked", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Logo;
