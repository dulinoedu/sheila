import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <header>
      <slot name="logo"></slot>
      <nav>
        <a selected href=${`//harvey.sistemadulino.com.br/app/${self.user}/${self.school}/dashboard`} target="_blank">Painel Inicial</a>
        <div></div>
        <a href=${`//harvey.sistemadulino.com.br/app/${self.user}/${self.school}/performance`} target="_blank">Desempenho</a>
      </nav>
      <slot name="avatar"></slot>
    </header>
  `;
}

export default component;
