import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    button {
      align-items: center;
      background-color: transparent;
      border: 1px solid #3481B2;
      border-radius: 100px;
      color: #3481B2;
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      gap: 12px;
      justify-content: center;
      line-height: line-height-${self.size});
      padding: 10px 12px;
    }

    :host(:not(:state(disabled))) {
      button {
        &:hover {
          background-color: var(--color-primary-50);
        }
      }
    }

    :host([selected]) {
      button {
        background-color: #3481B2;
        color: var(--color-neutral-white);

        &:hover {
          background-color: #3481B2;
          color: var(--color-neutral-white);
        }
      }
    }

    :host(:state(disabled)) {
      button {
        border-color: var(--color-grey-200);
        color: var(--color-grey-200);
        opacity: 0.4; 
      }
    }
  `;
}

export default style;
