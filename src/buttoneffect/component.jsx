import { html } from '@bake-js/-o-id/dom';

function component (props) {
  return html`
    <div class="buttoneffect" color=${props.color}>
      <slot></slot>
    </div>
  `
}

export default component