import { attributeChanged, define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import Echo from "@bake-js/-o-id/echo";
import on from "@bake-js/-o-id/event";
import dispatchEvent from "../dispatchEvent";
import component from "./component";
import style from "./style";

@define("lxp-password-toggle")
@paint(component, style)
class PasswordToggle extends Echo(HTMLElement) {
  #top;
  #right;
  #component;
  #visible = false;
  #icon = "eyeson";

  get icon() {
    return (this.#icon ??= "");
  }

  @attributeChanged("icon")
  @dispatchEvent("iconChanged")
  @repaint
  set icon(value) {
    this.#icon = value;
  }

  get component() {
    return (this.#component ??= "");
  }

  @attributeChanged("component")
  @dispatchEvent("componentChanged")
  @repaint
  set component(value) {
    this.#component = value;
  }

  get top() {
    return (this.#top ??= "");
  }

  @attributeChanged("top")
  @dispatchEvent("topChanged")
  @repaint
  set top(value) {
    this.#top = value;
  }

  get right() {
    return (this.#right ??= "");
  }

  @attributeChanged("right")
  @dispatchEvent("rightChanged")
  @repaint
  set right(value) {
    this.#right = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("lxp-icon")
  @repaint
  click() {
    const input = this.closest(`${this.#component}`).shadowRoot.querySelector(
      "input",
    );
    this.#visible = !this.#visible;

    if (this.#visible) {
      input.type = "text";
      this.#icon = "eyesoff";
      return;
    }

    input.type = "password";
    this.#icon = "eyeson";
  }
}

export default PasswordToggle;
