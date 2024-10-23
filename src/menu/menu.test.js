import { beforeEach, describe, expect, it, vi } from "vitest";
import "./menu"; // Supondo que o componente Menu seja exportado de "menu.js"

describe("Menu component", () => {
  let container;

  beforeEach(() => {
    // Cria um ambiente limpo antes de cada teste
    container = document.querySelector("body");
    container.innerHTML = "<lxp-menu></lxp-menu>";
  });

  it("deve ter o valor padrão 'false' para o atributo 'visible'", () => {
    const menu = container.querySelector("lxp-menu");

    // Verifica se o valor inicial do atributo 'visible' é falso
    expect(menu.visible).toBe(false);
  });

  it("deve disparar o evento 'visibleChanged' ao alterar o atributo 'visible'", async () => {
    let done;
    const menu = container.querySelector("lxp-menu");
    const listener = vi.fn(() => done());

    // Adiciona um listener para o evento 'visibleChanged'
    menu.addEventListener("visibleChanged", listener);

    // Altera o atributo 'visible'
    menu.setAttribute("visible", "true");

    // Aguarda o evento 'visibleChanged' ser disparado
    await new Promise((resolve) => (done = resolve));

    // Verifica se o listener foi chamado e o valor do atributo foi atualizado
    expect(listener).toHaveBeenCalled();
    expect(menu.visible).toBe(true);
  });

  it("deve disparar o evento 'hidded' quando o método 'hide()' for chamado", async () => {
    const menu = container.querySelector("lxp-menu");
    const listener = vi.fn();

    // Adiciona um listener para o evento 'hidded'
    menu.addEventListener("hidded", listener);

    // Chama o método hide
    menu.hide();

    // Verifica se o listener foi chamado e o atributo 'visible' foi removido
    expect(listener).toHaveBeenCalled();
  });

  it("deve disparar o evento 'hidded' quando o método 'show()' for chamado", async () => {
    const menu = container.querySelector("lxp-menu");
    const listener = vi.fn();

    // Adiciona um listener para o evento 'hidded'
    menu.addEventListener("hidded", listener);

    // Chama o método show
    menu.show();

    // Verifica se o listener foi chamado e o atributo 'visible' foi adicionado
    expect(listener).toHaveBeenCalled();
  });
});
