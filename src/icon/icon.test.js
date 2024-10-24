import { beforeEach, describe, expect, it, vi } from "vitest";
import "./icon"; // substitua "icon" pelo caminho correto do componente que está testando

describe("Icon component", () => {
  let container;

  // Cria um ambiente limpo para cada teste
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    container.innerHTML = "<lxp-icon></lxp-icon>"; // o componente em teste
  });

  it("deve ter valor padrão vazio para o atributo 'use'", () => {
    const icon = container.querySelector("lxp-icon");

    expect(icon.use).toBe(""); // valor padrão para 'use'
  });

  it("deve disparar o evento 'useChanged' ao alterar o atributo 'use'", async () => {
    let done;

    const icon = container.querySelector("lxp-icon");
    const listener = vi.fn(() => done());

    icon.addEventListener("useChanged", listener);
    icon.setAttribute("use", "new-icon");

    // Espera o evento 'useChanged' ser disparado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(icon.use).toBe("new-icon");
  });

  it("deve converter o valor do atributo 'use' para minúsculas", async () => {
    let done;

    const icon = container.querySelector("lxp-icon");
    const listener = vi.fn(() => done());

    icon.addEventListener("useChanged", listener);
    icon.setAttribute("use", "UPPERCASE-ICON");

    // Espera o evento 'useChanged' ser disparado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(icon.use).toBe("uppercase-icon"); // valor convertido para minúsculas
  });
});
