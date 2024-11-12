import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <img 
      src="${self.src}"
      alt="${self.alt}" 
      loading="${self.loading}"
      onerror="this.onerror=null;this.src='${self.srcfallback}';"
    />
  `;
}

export default component;
