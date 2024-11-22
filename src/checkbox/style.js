import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    div {
      align-items: center;
      cursor: pointer;
      display: flex;
      gap: 4px;
      
      svg {
        color: ${self.selected ? "#FB601D" : "#A6A6A6"};
      }

      slot {
        color: var(--color-grey-600);
        font-family: var(--font-family-base);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-md);
      }
    }
  `;
}

export default style;
