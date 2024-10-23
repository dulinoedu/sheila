import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <header>
      <lxp-logo src="//donna.sistemadulino.com.br/dulino_azul.svg" alt="Dulino"></lxp-logo>
      <nav>
        <a selected href=${`//harvey.sistemadulino.com.br/app/${self.user}/${self.school}/dashboard`} target="_blank">Painel Inicial</a>
        <div></div>
        <a href=${`//harvey.sistemadulino.com.br/app/${self.user}/${self.school}/performance`} target="_blank">Desempenho</a>
      </nav>
      <lxp-avatar src="" alt="Zezim Dev"></lxp-avatar>
    </header>
  `;
}

export default component;
