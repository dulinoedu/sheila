import { html } from "@bake-js/-o-id/dom";

function component(props) {
  return html`
    <button aria-label="${props.label}">
      <slot></slot>
    </button>
  `;
}

export default component;
