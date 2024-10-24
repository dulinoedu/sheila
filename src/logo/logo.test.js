import { beforeEach, describe, expect, it, vi } from "vitest";
import "./logo"; // substitua pelo caminho correto do componente

describe("Logo component", () => {
  let container;

  // Cria um ambiente limpo para cada teste
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    container.innerHTML = "<lxp-logo></lxp-logo>";
  });

  it("deve ter valores padrões para alt, loading e src", () => {
    const logo = container.querySelector("lxp-logo");

    expect(logo.alt).toBe(""); // valor padrão para alt
    expect(logo.loading).toBe("eager"); // valor padrão para loading
    expect(logo.src).toBe(""); // valor padrão para src
  });

  it("deve disparar o evento 'altChanged' ao alterar o atributo 'alt'", async () => {
    let done;

    const logo = container.querySelector("lxp-logo");
    const listener = vi.fn(() => done());

    logo.addEventListener("altChanged", listener);
    logo.setAttribute("alt", "Logo Alt");

    // Espera o evento 'altChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(logo.alt).toBe("Logo Alt");
  });

  it("deve disparar o evento 'loadingChanged' ao alterar o atributo 'loading'", async () => {
    let done;

    const logo = container.querySelector("lxp-logo");
    const listener = vi.fn(() => done());

    logo.addEventListener("loadingChanged", listener);
    logo.setAttribute("loading", "lazy");

    // Espera o evento 'loadingChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(logo.loading).toBe("lazy");
  });

  it("deve disparar o evento 'srcChanged' ao alterar o atributo 'src'", async () => {
    let done;

    const logo = container.querySelector("lxp-logo");
    const listener = vi.fn(() => done());

    logo.addEventListener("srcChanged", listener);
    logo.setAttribute("src", "logo.png");

    // Espera o evento 'srcChanged' ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(logo.src).toBe("logo.png");
  });

  it("deve disparar o evento 'clicked' ao clicar no elemento", async () => {
    const logo = container.querySelector("lxp-logo");
    const listener = vi.fn();

    logo.addEventListener("clicked", listener);
    logo.click();

    expect(listener).toHaveBeenCalled();
  });
});
