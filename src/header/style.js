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

    nav {
      align-items: center;
      display: flex;
      gap: 32px; 
    }
    
    a {
      color: var(--color-grey-400);
      cursor: pointer;
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-family-base);
      text-decoration: none;
    }

    div {
      background-color: var(--color-grey-200);
      height: 30px;
      width: 2px;
    }

    a[selected] {
      color: var(--color-grey-700);
    }
  `;
}

export default style;