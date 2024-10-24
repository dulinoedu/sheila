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

    headline slot {
      display: flex;
      gap: 20px;
      cursor: pointer;
    }

    trailing {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    educash {
      color: #3481B2;
    }
  `;
}

export default style;
