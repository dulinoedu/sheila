import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    button {
      align-items: center;
      background-color: transparent;
      border: 1px solid var(--color-complete-light);
      border-radius: 100px;
      color: var(--color-complete-light);
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
          background-color: var(--color-complete-lighter);
          color: var(--color-pure-black);
        }
      }
    }

    :host([selected]) {
      button {
        background-color: var(--color-complete);
        color: var(--color-pure-white);

        &:hover {
          background-color: var(--color-complete-light);
          color: var(--color-pure-black);
        }
      }
    }

    :host(:state(disabled)) {
      button {
        border-color: var(--color-master-light);
        color: var(--color-master);
        opacity: 0.4; 
      }
    }
  `;
}

export default style;
