import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    header {
      align-items: center;
      display: flex;
      height: 120px;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1440px;
      padding: var(--spacing_inset-xs);
    }

    .pipe {
      background-color: var(--color-gray-200);
      height: 30px;
      width: 2px;
    }

    lxp-text[selected] {
      font-weight: bold;
      color: var(--color-neutral-black);
    }
  `;
}

export default style;
