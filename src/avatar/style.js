import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --size-small: 48px;
      --size-large: 72px;
      display: block;
      height: var(--size-${self.size}, var(--size-small));
      position: relative;
      width: var(--size-${self.size}, var(--size-small));
    }

    img {
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      box-sizing: border-box;
      height: var(--size-${self.size}, var(--size-small));
      left: 0;
      object-fit: cover;
      object-position: top center;
      position: absolute;
      top: 0;
      width: var(--size-${self.size}, var(--size-small));
      z-index: 2;
    }

    div {
      align-items: center;
      background: linear-gradient(to right, #00B0AD, #00E675);
      border-radius: 50%;
      border: 3px solid rgb(49, 129, 178);
      box-sizing: border-box;
      color: white;
      display: flex;
      font-family: 'maven pro';
      font-weight: 500;
      height: var(--size-${self.size}, var(--size-small));
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      width: var(--size-${self.size}, var(--size-small));
      z-index: 1;
    }
  `;
}

export default style;
