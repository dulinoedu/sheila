import { css } from "@bake-js/-o-id/dom";

function style(self) {
    return css`
    :host {
      /* --font-size-default: var(--font-size-display-xs);
      --font-size-check: var(--font-size-xl);
      --font-size-uncheck: var(--font-size-lg); */
    }

    slot {
      font-size: var(--font-size-${self.size});
      gap: var(--spacing-${self.gap});
      display: flex;
    }
  `
}

export default style;
