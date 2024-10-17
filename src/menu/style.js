import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    div {
      box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.1);
      background-color: var(--color-background-white);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      padding: 8px;
      width: 200px;
    } 

    :host {
      :state(hidden) {
        div {
          display: none;
        }
      }
    }
  `;
}

export default style;
