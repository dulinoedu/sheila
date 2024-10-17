import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    slot {
      aspect-ratio: 1 / 1;
      border: none;
      border-radius: 50%;
      height: 42px;
      width: 42px;
      background: linear-gradient(to right, #00B0AD, #00E675);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 500;
      font-family: 'maven pro';
    }
  `;
}

export default style;
