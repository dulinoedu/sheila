import { attributeChanged, define } from "@bake-js/-o-id";
import Echo from "@bake-js/-o-id/echo";
import dispatchEvent from "../dispatchEvent";

@define("lxp-redirect")
class Redirect extends Echo(HTMLElement) {
  #href;

  get href() {
    return (this.#href ??= "");
  }

  @attributeChanged("href")
  @dispatchEvent("hrefChanged")
  set href(value) {
    this.#href = value;
  }

  // @dispatchEvent("was")
  go() {
    location.assign(this.href);
    return this.href;
  }
}

export default Redirect;
