import { css } from "@bake-js/-o-id/dom";

function style(self) {
  return css`
    :host {
      --background-gradient-effect: radial-gradient(circle at top, rgba(2, 111, 198, 1) -60%, rgba(1, 54, 96, 1)) 60%;
      --background-transparent: transparent;
    }

    header {
      background: var(--background-${self.variant});
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }

    container {
      align-items: center;
      display: flex;
      height: 120px;
      justify-content: space-between;
      max-width: 1440px;
      padding: var(--spacing_inset-xs);
      width: 100%;
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
