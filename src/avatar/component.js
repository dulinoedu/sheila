import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <img
      alt="${self.alt}"
      loading="${self.loading}"
      src="${self.src}"
      onerror="this.style.setProperty('border', 'none')"
    />
  `;
}

export default component;
