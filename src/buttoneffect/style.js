import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
  .buttoneffect {
    align-items: center;
    background-color: #FB601D;
    border: none;
    border-bottom: 2px solid #ff7d45;
    border-radius: 12px;
    box-shadow: 0 10px 0 #cd511c;
    color: var(--color-pure-white);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    gap: var(--spacing-xxxs);
    height: 50px;
    justify-content: center;
    width: 172px;
  }

  .buttoneffect:active {
    box-shadow: none; 
    transform: translateY(5px);
  }
`
}

export default style
