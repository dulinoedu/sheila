import { beforeEach, describe, expect, it, vi } from "vitest";
import "./text"; // importando o componente lxp-text

describe("Text component", () => {
  let container;

  // Cria um ambiente limpo para cada teste
  beforeEach(() => {
    container = document.querySelector("body");
    container.innerHTML = "<lxp-text></lxp-text>";
  });

  it("deve ter valores padrões para color, display, size e weight", () => {
    const text = container.querySelector("lxp-text");

    expect(text.color).toBe(""); // valor padrão para color
    expect(text.display).toBe(false); // valor padrão para display
    expect(text.size).toBe("sm"); // valor padrão para size (deve usar o display padrão)
    expect(text.weight).toBe("regular"); // valor padrão para weight
  });

  it("deve disparar o evento 'colorChanged' ao alterar o atributo 'color'", async () => {
    let done;

    const text = container.querySelector("lxp-text");
    const listener = vi.fn(() => done());

    text.addEventListener("colorChanged", listener);
    text.setAttribute("color", "red");

    // Espera o evento 'colorChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(text.color).toBe("red");
  });

  it("deve disparar o evento 'displayChanged' ao alterar o atributo 'display'", async () => {
    let done;

    const text = container.querySelector("lxp-text");
    const listener = vi.fn(() => done());

    text.addEventListener("displayChanged", listener);
    text.setAttribute("display", true);

    // Espera o evento 'displayChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(text.display).toBe(true);
  });

  it("deve disparar o evento 'sizeChanged' ao alterar o atributo 'size'", async () => {
    let done;

    const text = container.querySelector("lxp-text");
    const listener = vi.fn(() => done());

    text.addEventListener("sizeChanged", listener);
    text.setAttribute("size", "large");

    // Espera o evento 'sizeChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(text.size).toBe("large"); // deve ser `display-large` devido ao atributo display
  });

  it("deve disparar o evento 'weightChanged' ao alterar o atributo 'weight'", async () => {
    let done;

    const text = container.querySelector("lxp-text");
    const listener = vi.fn(() => done());

    text.addEventListener("weightChanged", listener);
    text.setAttribute("weight", "bold");

    // Espera o evento 'weightChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(text.weight).toBe("bold");
  });
});
