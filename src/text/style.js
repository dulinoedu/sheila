import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --color-primary-solid: var(--color-neutral-white);
      --color-primary-ghost: var(--color-primary-500);
      --color-primary-link: var(--color-primary-500);

      --color-secondary-solid: var(--color-neutral-white);
      --color-secondary-ghost: var(--color-secondary-500);
      --color-secondary-link: var(--color-secondary-500);

      --color-primary-solid-active: var(--color-neutral-white);
      --color-primary-ghost-active: var(--color-primary-500);
      --color-primary-link-active: var(--color-primary-700);

      --color-secondary-solid-active: var(--color-neutral-white);
      --color-secondary-ghost-active: var(--color-secondary-500);
      --color-secondary-link-active: var(--color-secondary-700);

      --font-weight-regular: 400;
      --font-weight-medium: 500;
      --font-weight-semibold: 600;
      --font-weight-bold: 700;

      --line-height-large: var(--line-height-display-xs);
      --line-height-medium: var(--line-height-xl);
      --line-height-small: var(--line-height-lg);
    }

    slot {
      color: var(--color-${self.variant}-${self.color});
      font-family: var(--font-family-base);
      font-size: var(--font-size-${self.size});
      font-weight: var(--font-weight-${self.weight});
      line-height: var(--line-height-${self.size});
    }
  `;
}

export default style;
