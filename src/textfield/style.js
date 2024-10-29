import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      transition: all 0.2s ease-out;
    }

    .textField__container {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: relative;
      width: var(--width-xxs);
    }

    .textField__label {
      color: black;
      font-family: 'maven pro';
    }

    .textField__wrapper {
      position: relative;
      width: inherit;
    }

    .textField {
      appearance: none;
      border: 1px solid grey;
      border-radius: 9px;
      color: grey;
      font-family: 'maven pro';
      height: 44px;
      padding: 14px 16px;
      width: 100%;
    }

    .textField[type="number"] {
      -moz-appearance: textfield;
    }

    .textField:active,
    .textField:hover {
      outline: 0;
    }

    .textField:focus {
      outline: 0;
    }

    .textField::placeholder {
      color: grey;
    }

    .textField__alert {
      align-items: center;
      color: red;
      display: none;
      height: 16px;
      justify-content: center;
      position: absolute;
      right: 14px;
      top: 14px;
      width: 16px;
    }

    :host(:state(invalid)) {
      .textField__alert {
        display: flex;
      }

      .textField {
        border-color: red;
        padding-right: 40px;
      }
    }
  `;
}

export default style;
