import { describe, it, expect, beforeEach, vi } from "vitest";
import "./button"; // substitua "button" pelo caminho correto para o seu componente

describe("Button component", () => {
  let container;

  // Cria um ambiente limpo para cada teste
  beforeEach(() => {
    container = document.querySelector("body");
    container.innerHTML = "<lxp-button></lxp-button>"; // substitua pelo nome do componente em teste
  });

  it("deve ter valores padrões para disabled, size, type e variant", () => {
    const button = container.querySelector("lxp-button");

    expect(button.disabled).toBe(false); // valor padrão para disabled
    expect(button.size).toBe("medium"); // valor padrão para size
    expect(button.type).toBe("submit"); // valor padrão para type
    expect(button.variant).toBe("primary-solid"); // valor padrão para variant
  });

  it("deve disparar o evento 'disabledChanged' ao alterar o atributo 'disabled'", async () => {
    let done;

    const button = container.querySelector("lxp-button");
    const listener = vi.fn(() => done());

    button.addEventListener("disabledChanged", listener);
    button.setAttribute("disabled", "true");

    // Espera o evento 'disabledChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(button.disabled).toBe(true);
  });

  it("deve disparar o evento 'sizeChanged' ao alterar o atributo 'size'", async () => {
    let done;

    const button = container.querySelector("lxp-button");
    const listener = vi.fn(() => done());

    button.addEventListener("sizeChanged", listener);
    button.setAttribute("size", "large");

    // Espera o evento 'sizeChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(button.size).toBe("large");
  });

  it("deve disparar o evento 'typeChanged' ao alterar o atributo 'type'", async () => {
    let done;

    const button = container.querySelector("lxp-button");
    const listener = vi.fn(() => done());

    button.addEventListener("typeChanged", listener);
    button.setAttribute("type", "reset");

    // Espera o evento 'typeChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(button.type).toBe("reset");
  });

  it("deve disparar o evento 'variantChanged' ao alterar o atributo 'variant'", async () => {
    let done;

    const button = container.querySelector("lxp-button");
    const listener = vi.fn(() => done());

    button.addEventListener("variantChanged", listener);
    button.setAttribute("variant", "secondary-outline");

    // Espera o evento 'variantChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(button.variant).toBe("secondary-outline");
  });

  it("deve disparar o evento 'clicked' no método click()", async () => {
    const button = container.querySelector("lxp-button");
    const listener = vi.fn();

    button.addEventListener("clicked", listener);
    button.click();

    expect(listener).toHaveBeenCalled();
  });

  it("deve chamar 'requestSubmit' ao clicar quando o tipo for 'submit'", async () => {
    let done;

    const form = document.createElement("form");
    const button = document.createElement("lxp-button");
    const listener = vi.fn(() => done());

    form.addEventListener("submit", listener);
    form.appendChild(button);

    container.appendChild(form);

    button.setAttribute("type", "submit");
    button.click();

    // Espera o metodo 'requestSubmit' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
  });

  it.skip("deve chamar 'reset' ao clicar quando o tipo for 'reset'");
});
