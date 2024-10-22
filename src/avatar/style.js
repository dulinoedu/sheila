import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --size-small: 48px;
      --size-large: 72px;
      display: block;
      height: var(--size-${self.size}, var(--size-small));
      width: var(--size-${self.size}, var(--size-small));
    }

    img {
      align-items: center;
      aspect-ratio: 1 / 1;
      background: linear-gradient(to right, #00B0AD, #00E675);
      border-radius: 50%;
      border: 3px solid rgb(49, 129, 178);
      box-sizing: border-box;
      color: white;
      cursor: pointer;
      display: block;
      display: flex;
      font-family: 'maven pro';
      font-weight: 500;
      height: var(--size-${self.size}, var(--size-small));
      justify-content: center;
      object-fit: cover;
      object-position: top center;
      width: var(--size-${self.size}, var(--size-small));
    }
  `;
}

export default style;
