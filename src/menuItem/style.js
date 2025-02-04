import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    div {
      align-items: center;
      border-radius: 8px;
      box-sizing: border-box;
      color: var(--color-master-dark);
      display: flex;
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-md);
      height: 48px;
      padding: 12px;
    }

    :host(:not(:state(disabled))) {
      div:hover {
        background-color: var(--color-master-lightest);
      }
    }

    :host(:state(disabled)) {
      div {
        color: var(--color-master);
        cursor: default;
      }
    }
  `;
}

export default style;
