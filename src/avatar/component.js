import { html } from "@bake-js/-o-id/dom";
import fallback from "./fallback.svg";

function component(self) {
  return html`
    <img
      alt="${self.alt}"
      loading="${self.loading}"
      src="${self.src}"
      onerror="this.remove()"
    />
    <div>${self.alt}</div>
  `;
}

export default component;
