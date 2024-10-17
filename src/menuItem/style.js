import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    a {
      border-radius: 8px;
      color: var(--color-grey-500);
      cursor: pointer;
      font-family: var(--font-family-base); 
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-regular);
      text-decoration: none;
      padding: 12px;
      height: 48px;
      line-height: var(--line-height-lg);
      width: 176px;
    }   

    a:hover {
      background-color: #F4FBF8;
    }
  `;
}

export default style;
