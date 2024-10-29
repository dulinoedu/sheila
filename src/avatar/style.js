import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --font-size-large: var(--font-size-display-xs);
      --font-size-small: var(--font-size-md);
      --line-height-large: var(--line-height-display-xs);
      --line-height-small: var(--line-height-md);
      --size-large: 72px;
      --size-small: 48px;
      display: block;
      height: var(--size-${self.size}, var(--size-small));
      position: relative;
      width: var(--size-${self.size}, var(--size-small));
    }

    img {
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 3px solid rgb(49, 129, 178);
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
      box-sizing: border-box;
      color: var(--color-neutral-white);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-${self.size});
      font-weight: var(--font-weight-medium);
      height: var(--size-${self.size}, var(--size-small));
      justify-content: center;
      left: 0;
      line-height: var(--line-height-${self.size});
      position: absolute;
      top: 0;
      width: var(--size-${self.size}, var(--size-small));
      z-index: 1;
    }
  `;
}

export default style;
