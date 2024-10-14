import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component";

@define("s-buttoneffect")
@paint(component)
class Buttoneffect extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }
}

export default Buttoneffect
