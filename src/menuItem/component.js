import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <div>
      <slot></slot>
    </div>
  `;
}

export default component;
