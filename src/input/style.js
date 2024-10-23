import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    :host {
      border: 2px solid grey;
      padding: 9px;
      border-radius: 10px;
    }

    input {
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      outline: none;
      font: inherit;
      color: inherit;
      width: 100%;
      font-family: 'maven pro';
    }
  `;
}

export default style;
