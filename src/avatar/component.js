import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <img
      onerror="this.style.setProperty('border', 'none')"
      src="${self.src}"
      alt="${self.alt}"
      loading="${self.loading}"
    />
  `;
}

export default component;
