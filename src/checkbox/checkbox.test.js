import { beforeEach, describe, expect, it, vi } from "vitest";
import "./checkbox"; // Certifique-se de que o caminho seja correto para o seu componente

describe("Checkbox component", () => {
  let container;

  beforeEach(() => {
    container = document.querySelector("body");
    container.innerHTML = "<lxp-checkbox></lxp-checkbox>";
  });

  it("deve ter os valores padrões para selected e value", () => {
    const checkbox = container.querySelector("lxp-checkbox");

    expect(checkbox.selected).toBe(false); // valor padrão de selected
    expect(checkbox.value).toBe(undefined); // valor padrão de value
  });

  it("deve disparar o evento 'selectedChanged' ao alterar o atributo 'selected'", async () => {
    let done;

    const checkbox = container.querySelector("lxp-checkbox");
    const listener = vi.fn(() => done());

    checkbox.addEventListener("selectedChanged", listener);
    checkbox.setAttribute("selected", "true");

    // Espera o evento 'selectedChanged' ser disparado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(checkbox.selected).toBe(true);
  });

  it("deve disparar o evento 'valueChanged' ao alterar o atributo 'value'", async () => {
    let done;

    const checkbox = container.querySelector("lxp-checkbox");
    const listener = vi.fn(() => done());

    checkbox.addEventListener("valueChanged", listener);
    checkbox.setAttribute("value", "new value");

    // Espera o evento 'valueChanged' ser disparado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(checkbox.value).toBe("new value");
  });

  it("deve alternar o valor de 'selected' e disparar o evento 'clicked' ao executar click()", async () => {
    const checkbox = container.querySelector("lxp-checkbox");
    const listener = vi.fn();

    checkbox.addEventListener("clicked", listener);
    checkbox.click();

    expect(listener).toHaveBeenCalled();
    expect(checkbox.selected).toBe(true); // Alterna o valor de selected
  });
});
