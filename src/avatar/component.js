import { html } from "@bake-js/-o-id/dom";
import fallback from "./fallback.svg";

function component(self) {
  return html`
    <img
      alt="${self.alt}"
      loading="${self.loading}"
      src="${self.src}"
      onerror="this.setAttribute('src', '${fallback}'); this.setAttribute('data-alt', '${self.alt}')"
    />
  `;
}

export default component;
