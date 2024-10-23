# Web Component: `<lxp-logo>`

## Visão Geral
`<lxp-logo>` é um custom element utilizado para exibir o logo de uma aplicação com suporte para atributos personalizados como `src`, `alt`, e `loading`. Ele também possui interações personalizadas como o clique na imagem, disparando eventos e permitindo um carregamento flexível da imagem através de atributos reativos.

---

## Como Usar

Basta incluir a tag `<lxp-logo>` no HTML da sua aplicação:

```html
<lxp-logo src="logo.png" alt="Logo da Empresa"></lxp-logo>
```

Ou via JavaScript:

```javascript
const logo = document.createElement('lxp-logo');
logo.setAttribute('src', 'logo.png');
document.body.appendChild(logo);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `src`
- **Descrição**: Define a URL da imagem a ser exibida no logo.  
- **Tipo**: `String`  
- **Valor Padrão**: `""` (string vazia)  
- **Evento disparado**: `srcChanged` (disparado sempre que o valor do atributo for alterado).

**Exemplo de uso:**

```html
<lxp-logo src="logo.png"></lxp-logo>
```

---

### `alt`
- **Descrição**: Define o texto alternativo da imagem do logo.  
- **Tipo**: `String`  
- **Valor Padrão**: `""` (string vazia)  
- **Evento disparado**: `altChanged` (disparado sempre que o valor do atributo for alterado).

**Exemplo de uso:**

```html
<lxp-logo alt="Logo da Empresa"></lxp-logo>
```

---

### `loading`
- **Descrição**: Controla o comportamento de carregamento da imagem. Pode ser `lazy` (carregar sob demanda) ou `eager` (carregar imediatamente).  
- **Tipo**: `String`  
- **Valor Padrão**: `"eager"`  
- **Evento disparado**: `loadingChanged` (disparado sempre que o valor do atributo for alterado).

**Exemplo de uso:**

```html
<lxp-logo loading="lazy"></lxp-logo>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `click()`
- **Descrição**: Dispara o evento de clique no logo, simulando uma interação de clique na imagem.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `clicked` (disparado quando o método for chamado).

**Exemplo de uso:**

```javascript
const logo = document.querySelector('lxp-logo');
logo.click();
```

---

## Exemplo Completo

```html
<lxp-logo src="logo.png" alt="Logo da Empresa" loading="lazy"></lxp-logo>

<script>
  const logo = document.querySelector('lxp-logo');

  // Alterando atributos via JavaScript
  logo.setAttribute('src', 'novo-logo.png');
  logo.setAttribute('alt', 'Novo Logo da Empresa');

  // Executando o método de clique
  logo.click();

  // Ouvindo eventos
  logo.addEventListener('srcChanged', () => console.log('O atributo src foi alterado!'));
  logo.addEventListener('clicked', () => console.log('O logo foi clicado!'));
</script>
```
