import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    img {
      aspect-ratio: 4 / 1;
      height: 40px;
      width: auto;
    }

    img[pointer="true"] {
      cursor: pointer;
    }

  `;
}

export default style;
