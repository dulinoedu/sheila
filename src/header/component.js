import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <header>
      ${self.selected ? console.log("Painel Inicial") : console.log("Desempenho")}
      <lxp-logo src="//donna.sistemadulino.com.br/dulino_azul.svg" alt="Dulino"></lxp-logo>
        <div style="gap: 32px; display: flex; align-items: center;">
          <lxp-text color="grey-300" weight="medium" style="cursor: pointer;" selected >Painel Inicial</lxp-text>
            <div style="background-color: #C3C3C3; height: 28px; width: 2px;"></div>
          <lxp-text color="grey-300" weight="medium" style="cursor: pointer;">Desempenho</lxp-text>
        </div>
        <lxp-avatar src="" alt="Zezim Dev"></lxp-avatar>
    </header>
  `;
}

export default component;
