import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      width: 200px;
    }

    div {
      box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.1);
      background-color: var(--color-master-lighter);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      padding: 8px;
      width: 100%;
    } 
  `;
}

export default style;
