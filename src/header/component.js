import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <header>
      ${self.selected ? console.log("Painel Inicial") : console.log("Desempenho")}
      <lxp-logo src="//donna.sistemadulino.com.br/dulino_azul.svg" alt="Dulino"></lxp-logo>
        <nav>
          <a>Painel Inicial</a>
          <div></div>
          <a>Desempenho</a>
        </nav>
        <lxp-avatar src="" alt="Zezim Dev"></lxp-avatar>
    </header>
  `;
}

export default component;
