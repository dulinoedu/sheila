import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <div>
      <slot name="label"></slot>
      <select>
        <option>item 1</option>
        <option>item 2</option>
      </select>     
    </div>
  `;
}

export default component;
