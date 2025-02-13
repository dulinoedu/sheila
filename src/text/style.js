import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      color: var(--color-${self.color});
      font-family: var(--font-family-base);
      font-size: var(--font-size-${self.size});
      font-weight: var(--font-weight-${self.weight});
      line-height: var(--line-height-${self.size});
      text-align: ${self.textalign};
    }
  `;
}

export default style;
