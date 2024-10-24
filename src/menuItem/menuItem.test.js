import { beforeEach, describe, expect, it, vi } from "vitest";
import "./menuItem"; // Substitua pelo caminho do componente "MenuItem"

describe("MenuItem component", () => {
  let container;

  // Cria um ambiente limpo para cada teste
  beforeEach(() => {
    container = document.querySelector("body");
    container.innerHTML = "<lxp-menu-item></lxp-menu-item>"; // Substitua pelo componente em teste
  });

  it("deve ter valores padrões para disabled e value", () => {
    const menuItem = container.querySelector("lxp-menu-item");

    expect(menuItem.disabled).toBe(false); // valor padrão para disabled
    expect(menuItem.value).toBe(""); // valor padrão para value
  });

  it("deve disparar o evento 'disabledChanged' ao alterar o atributo 'disabled'", async () => {
    let done;

    const menuItem = container.querySelector("lxp-menu-item");
    const listener = vi.fn(() => done());

    menuItem.addEventListener("disabledChanged", listener);
    menuItem.setAttribute("disabled", "");

    // Espera o evento 'disabledChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(menuItem.disabled).toBe(true);
  });

  it("deve disparar o evento 'valueChanged' ao alterar o atributo 'value'", async () => {
    let done;

    const menuItem = container.querySelector("lxp-menu-item");
    const listener = vi.fn(() => done());

    menuItem.addEventListener("valueChanged", listener);
    menuItem.setAttribute("value", "item-value");

    // Espera o evento 'valueChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(menuItem.value).toBe("item-value");
  });

  it("deve disparar o evento 'clicked' no método click()", async () => {
    const menuItem = container.querySelector("lxp-menu-item");
    const listener = vi.fn();

    menuItem.addEventListener("clicked", listener);
    menuItem.click();

    expect(listener).toHaveBeenCalled();
  });
});
