import { html } from "@bake-js/-o-id/dom";
import svg from './svg'

function component() {
  return html`
    <div>
      ${svg.adduser()}
    </div>
  `;
}

export default component;
