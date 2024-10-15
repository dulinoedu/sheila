import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component";
import Echo from "@bake-js/-o-id/echo";

@define("lxp-icon")
@paint(component)
class Icon extends Echo(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Icon;
