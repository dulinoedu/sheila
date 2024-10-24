import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --background-color-primary-solid: var(--color-primary-600);
      --background-color-primary-ghost: var(--color-neutral-white);
      --background-color-primary-link: transparent;

      --background-color-secondary-solid: var(--color-secondary-600);
      --background-color-secondary-ghost: var(--color-neutral-white);
      --background-color-secondary-link: transparent;

      --background-color-primary-solid-hover: var(--color-primary-700);
      --background-color-primary-ghost-hover: var(--color-primary-50);
      --background-color-primary-link-hover: var(--color-primary-50);

      --background-color-secondary-solid-hover: var(--color-secondary-700);
      --background-color-secondary-ghost-hover: var(--color-secondary-50);
      --background-color-secondary-link-hover: var(--color-secondary-50);

      --border-color-primary-solid: var(--color-primary-500);
      --border-color-primary-ghost: var(--color-primary-500);
      --border-color-primary-link: transparent;

      --border-color-secondary-solid: var(--color-secondary-500);
      --border-color-secondary-ghost: var(--color-secondary-500);
      --border-color-secondary-link: transparent;

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

      --font-size-large: var(--font-size-display-xs);
      --font-size-medium: var(--font-size-xl);
      --font-size-small: var(--font-size-lg);

      --line-height-large: var(--line-height-display-xs);
      --line-height-medium: var(--line-height-xl);
      --line-height-small: var(--line-height-lg);

      --padding-large: 16px 22px;
      --padding-medium: 12px 20px;
      --padding-small: 8px 18px;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 1px solid #3481B2;
      border-radius: 100px;
      color: #3481B2;
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      gap: 12px;
      justify-content: center;
      line-height: line-height-${self.size});
      padding: 10px 12px;
    }

    :host(:not(:state(disabled))) {
      button {
        &:hover {
          background-color: var(--background-color-${self.variant}-hover);
        }

        &:active {
          color: var(--color-${self.variant}-active);
        }
      }
    }

    :host(:state(disabled)) {
      button {
        opacity: 0.4; 
      }
    }
  `;
}

export default style;
