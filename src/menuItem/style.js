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
      align-items: center;
      border-radius: 8px;
      color: var(--color-grey-500);
      display: flex;
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

    :host(:state(hover)) {
      a:hover {
        background-color: #F4FBFF; 
      }
    }
  `;
}

export default style;
