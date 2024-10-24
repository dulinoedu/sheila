import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <header>
      <leading>
        <slot name="leading"></slot>
      </leading>
      <headline>
        <slot name="headline"></slot>
      </headline>
      <trailing>
        <slot name="trailing"></slot>
      </trailing>
    </header>
  `;
}

export default component;
