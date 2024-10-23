import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    :host {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(52, 129, 178, 0.2);
      border-top: 4px solid #3481B2;
      border-radius: 50%;
      animation: spin 0.4s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
}

export default style;
