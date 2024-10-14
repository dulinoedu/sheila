import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --background-color-primary: var(--color-primary-600);
      --background-color-secondary: var(--color-neutral-white);
      --background-color-tertiary: transparent;

      --background-color-primary-hover: var(--color-primary-700);
      --background-color-secondary-hover: var(--color-primary-50);
      --background-color-tertiary-hover: var(--color-primary-50);

      --border-color-primary: var(--color-primary-500);
      --border-color-secondary: var(--color-primary-500);
      --border-color-tertiary: transparent;

      --box-shadow-primary: 0 12px 0 var(--color-primary-700);
      --box-shadow-secondary: 0 12px 0 var(--color-primary-500);
      --box-shadow-tertiary: 0 0 0 transparent;

      --color-primary: var(--color-neutral-white);
      --color-secondary: var(--color-primary-500);
      --color-tertiary: var(--color-primary-500);

      --color-primary-active: var(--color-neutral-white);
      --color-secondary-active: var(--color-primary-500);
      --color-tertiary-active: var(--color-primary-700);

      --font-size-large: var(--font-size-display-xs);
      --font-size-medium: var(--font-size-xl);
      --font-size-small: var(--font-size-lg);

      --line-height-large: var(--line-height-display-xs);
      --line-height-medium: var(--line-height-xl);
      --line-height-small: var(--line-height-lg);

      --padding-large: 16px 22px;
      --padding-medium: 12px 20px;
      --padding-small: 8px 18px;

      --transform-primary: translateY(5px);
      --transform-secondary: translateY(5px);
      --transform-tertiary: none;
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
      line-height: var(--line-height-${self.size});
      padding: var(--padding-${self.size});
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
      opacity: 0.4; 
    }
  `;
}

export default style;
