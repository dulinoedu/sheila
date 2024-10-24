import { describe, it, expect, beforeEach, vi } from "vitest";
import "./avatar"; // importa o componente Avatar

describe("Avatar component", () => {
  let container;

  // Cria um ambiente limpo para cada teste
  beforeEach(() => {
    container = document.querySelector("body");
    container.innerHTML = "<lxp-avatar></lxp-avatar>";
  });

  it("deve ter valores padrões para alt, loading, size e src", () => {
    const avatar = container.querySelector("lxp-avatar");

    expect(avatar.alt).toBe(""); // valor padrão para alt
    expect(avatar.loading).toBe("auto"); // valor padrão para loading
    expect(avatar.size).toBe("small"); // valor padrão para size
    expect(avatar.src).toBe(""); // valor padrão para src
  });

  it("deve disparar o evento 'altChanged' ao alterar o atributo 'alt'", async () => {
    let done;

    const avatar = container.querySelector("lxp-avatar");
    const listener = vi.fn(() => done());

    avatar.addEventListener("altChanged", listener);
    avatar.setAttribute("alt", "Luke Skywalker");

    // Tempo de espera para o evento altChanged ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(avatar.alt).toBe("LS"); // As iniciais de Luke Skywalker
  });

  it("deve disparar o evento 'loadingChanged' ao alterar o atributo 'loading'", async () => {
    let done;

    const avatar = container.querySelector("lxp-avatar");
    const listener = vi.fn(() => done());

    avatar.addEventListener("loadingChanged", listener);
    avatar.setAttribute("loading", "lazy");

    // Tempo de espera para o evento loadingChanged ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(avatar.loading).toBe("lazy");
  });

  it("deve disparar o evento 'sizeChanged' ao alterar o atributo 'size'", async () => {
    let done;

    const avatar = container.querySelector("lxp-avatar");
    const listener = vi.fn(() => done());

    avatar.addEventListener("sizeChanged", listener);
    avatar.setAttribute("size", "large");

    // Tempo de espera para o evento sizeChanged ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(avatar.size).toBe("large");
  });

  it("deve disparar o evento 'srcChanged' ao alterar o atributo 'src'", async () => {
    let done;

    const avatar = container.querySelector("lxp-avatar");
    const listener = vi.fn(() => done());

    avatar.addEventListener("srcChanged", listener);
    avatar.setAttribute("src", "luke.jpg");

    // Tempo de espera para o evento srcChanged ser executado
    await new Promise((resolve) => (done = resolve));

    expect(listener).toHaveBeenCalled();
    expect(avatar.src).toBe("luke.jpg");
  });

  it("deve disparar o evento 'clicked' no método click()", async () => {
    const avatar = container.querySelector("lxp-avatar");
    const listener = vi.fn();

    avatar.addEventListener("clicked", listener);
    avatar.click();

    expect(listener).toHaveBeenCalled();
  });
});
