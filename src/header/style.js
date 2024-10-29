import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --background-color-gradient-effect: radial-gradient(circle at top, rgba(2, 111, 198, 1) -60%, rgba(1, 54, 96, 1)) 60%;
      --background-color-transparent: transparent;
    }

    header[oncolor] {
    }

    header {
      align-items: center;
      display: flex;
      height: 120px;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1440px;
      padding: var(--spacing_inset-xs);
      background-color: var(--background-color-${self.variant});
    }

    headline slot {
      display: flex;
      gap: 20px;
      cursor: pointer;
    }

    trailing {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  `;
}

export default style;
