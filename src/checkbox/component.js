import { html } from "@bake-js/-o-id/dom";
import svg from "./svg";

function component(self) {
  return html`
    <div class="checkbox">
      ${self.selected ? svg.check() : svg.uncheck()}
      <slot></slot>
    </div>
  `;
}

export default component;
