import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component";
import style from "./style";

@define("lxp-loading")
@paint(component, style)
class Loading extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Loading;
