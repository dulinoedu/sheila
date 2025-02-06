import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --background-color-primary-solid: var(--color-complete);
      --background-color-primary-ghost: var(--color-pure-white);
      --background-color-primary-link: transparent;

      --background-color-secondary-solid: var(--color-danger);
      --background-color-secondary-ghost: var(--color-warning);
      --background-color-secondary-link: transparent;

      --background-color-primary-solid-hover: var(--color-complete-light);
      --background-color-primary-ghost-hover: var(--color-primary-50);
      --background-color-primary-link-hover: var(--color-primary-50);

      --background-color-secondary-solid-hover: var(--color-danger-light);
      --background-color-secondary-ghost-hover: var(--color-warning-light);
      --background-color-secondary-link-hover: var(--color-secondary-50);

      --border-color-primary-solid: var(--color-complete-light);
      --border-color-primary-ghost: var(--color-primary-500);
      --border-color-primary-link: transparent;

      --border-color-secondary-solid: var(--color-danger-light);
      --border-color-secondary-ghost: var(--color-warning-light);
      --border-color-secondary-link: transparent;

      --box-shadow-primary-solid: 0 12px 0 var(--color-complete-light);
      --box-shadow-primary-ghost: 0 12px 0 var(--color-primary-500);
      --box-shadow-primary-link: 0 0 0 transparent;

      --box-shadow-secondary-solid: 0 12px 0 var(--color-danger-light);
      --box-shadow-secondary-ghost: 0 12px 0 var(--color-warning-light);
      --box-shadow-secondary-link: 0 0 0 transparent;

      --color-primary-solid: var(--color-neutral-white);
      --color-primary-ghost: var(--color-primary-600);
      --color-primary-link: var(--color-primary-600);

      --color-secondary-solid: var(--color-neutral-white);
      --color-secondary-ghost: var(--color-neutral-white);
      --color-secondary-link: var(--color-secondary-600);

      --color-primary-solid-active: var(--color-neutral-white);
      --color-primary-ghost-active: var(--color-primary-700);
      --color-primary-link-active: var(--color-primary-700);

      --color-secondary-solid-active: var(--color-neutral-white);
      --color-secondary-ghost-active: var(--color-neutral-white);
      --color-secondary-link-active: var(--color-secondary-700);

      --font-size-large: var(--font-size-display-xs);
      --font-size-medium: var(--font-size-xl);
      --font-size-small: var(--font-size-lg);

      --line-height-large: var(--line-height-display-xs);
      --line-height-medium: var(--line-height-xl);
      --line-height-small: var(--line-height-xs);

      --padding-large: 16px 22px;
      --padding-medium: 12px 20px;
      --padding-small: 8px 18px;

      --transform-primary-solid: translateY(12px);
      --transform-primary-ghost: translateY(12px);
      --transform-primary-link: none;

      --transform-secondary-solid: translateY(12px);
      --transform-secondary-ghost: translateY(12px);
      --transform-secondary-link: none;
      box-sizing: border-box;
    }

    button {
      align-items: center;
      background-color: var(--background-color-${self.variant});
      border: 3px solid var(--border-color-${self.variant});
      border-radius: 12px;
      box-shadow: var(--box-shadow-${self.variant});
      color: var(--color-${self.variant});
      cursor: pointer;
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-${self.size});
      font-weight: var(--font-weight-bold);
      gap: 4px;
      justify-content: center;
      padding: var(--padding-${self.size});
      box-sizing: border-box;
      width: ${self.width};
    }

    :host(:not(:state(disabled))) {
      button {
        &:hover {
          background-color: var(--background-color-${self.variant}-hover);
        }

        &:active {
          color: var(--color-${self.variant}-active);
          box-shadow: none; 
          transform: var(--transform-${self.variant});
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
