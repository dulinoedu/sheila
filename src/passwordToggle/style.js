import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    lxp-icon {
      color: var(--color-master-dark); 
      cursor: pointer;
      position: absolute;
      right: ${self.right}px;
      top: ${self.top}px;
    }

    lxp-text-field {
      position: relative;
    }
  `;
}

export default style;
