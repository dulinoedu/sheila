import { html } from "@bake-js/-o-id/dom";
import bene from "./img.jpg";

function component() {
  return html`
    <div>
      <slot>
      </slot>
    </div>
  `;
}

export default component;
