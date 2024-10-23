import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-avatar")
@paint(component, style)
class Avatar extends Echo(HTMLElement) {
  #alt;
  #loading;
  #size;
  #src;

  get alt() {
    return (this.#alt ??= "")
      .split(" ")
      .map((value) => value[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  @attributeChanged("alt")
  @dispatchEvent("altChanged")
  @repaint
  set alt(value) {
    this.#alt = value;
  }

  get loading() {
    return (this.#loading ??= "auto");
  }

  @attributeChanged("loading")
  @dispatchEvent("loadingChanged")
  @repaint
  set loading(value) {
    this.#loading = value;
  }

  get size() {
    return (this.#size ??= "small");
  }

  @attributeChanged("size")
  @dispatchEvent("sizeChanged")
  @repaint
  set size(value) {
    this.#size = value;
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

  @on.click(":host *")
  click() {
    const init = { bubbles: true, cancelable: true };
    const event = new CustomEvent("clicked", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Avatar;
