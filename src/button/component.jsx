import { html } from "@bake-js/-o-id/dom";

function component(props) {
  return html`
    <button>
      <slot></slot>
    </button>
  `;
}

export default component;
