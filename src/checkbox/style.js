import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      cursor: pointer;
    }

    .checkbox {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .uncheck {
      color: #A6A6A6;
    }

    .check {
      color: #FB601D;
    }
  `;
}

export default style;
