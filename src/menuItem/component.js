import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <div>
      <a href="${self.href}">
        <slot></slot>
      </a>
    </div>
  `;
}

export default component;
