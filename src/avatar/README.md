# Web Component: `<lxp-avatar>`

## Visão Geral
`<lxp-avatar>` é um custom element utilizado para exibir um avatar com suporte a atributos customizados como `alt`, `loading`, `size`, e `src`. O componente oferece interações avançadas como eventos para cada atributo alterado e um evento `clicked` ao ser clicado.

---

## Como Usar

Basta incluir a tag `<lxp-avatar>` no HTML da sua aplicação:

```html
<lxp-avatar src="avatar.png" alt="User Avatar"></lxp-avatar>
```

Ou via JavaScript:

```javascript
const avatar = document.createElement('lxp-avatar');
avatar.setAttribute('src', 'avatar.png');
document.body.appendChild(avatar);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `alt`
- **Descrição**: Texto alternativo para o avatar, exibido como iniciais se a imagem não carregar.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `altChanged` (disparado sempre que o valor do atributo for alterado).  

**Exemplo de uso:**

```html
<lxp-avatar alt="John Doe"></lxp-avatar>
```

---

### `loading`
- **Descrição**: Define o comportamento de carregamento da imagem.  
- **Tipo**: `String` (`"auto"`, `"lazy"`, `"eager"`)  
- **Valor Padrão**: `"auto"`  
- **Evento disparado**: `loadingChanged`  

**Exemplo de uso:**

```html
<lxp-avatar loading="lazy"></lxp-avatar>
```

---

### `size`
- **Descrição**: Define o tamanho do avatar.  
- **Tipo**: `String` (`"small"`, `"medium"`, `"large"`)  
- **Valor Padrão**: `"small"`  
- **Evento disparado**: `sizeChanged`  

**Exemplo de uso:**

```html
<lxp-avatar size="large"></lxp-avatar>
```

---

### `src`
- **Descrição**: URL da imagem a ser exibida como avatar.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `srcChanged`  

**Exemplo de uso:**

```html
<lxp-avatar src="https://example.com/avatar.jpg"></lxp-avatar>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `click()`
- **Descrição**: Simula um clique no avatar, disparando o evento `clicked`.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `clicked` (disparado quando o avatar é clicado).  

**Exemplo de uso:**

```javascript
const avatar = document.querySelector('lxp-avatar');
avatar.click();
```

---

## Exemplo Completo

```html
<lxp-avatar src="avatar.png" alt="John Doe" size="medium" loading="lazy"></lxp-avatar>

<script>
  const avatar = document.querySelector('lxp-avatar');

  // Alterando atributos via JavaScript
  avatar.setAttribute('alt', 'Jane Doe');
  avatar.setAttribute('size', 'large');

  // Simulando clique
  avatar.click();

  // Ouvindo eventos
  avatar.addEventListener('altChanged', () => console.log('O atributo alt foi alterado!'));
  avatar.addEventListener('clicked', () => console.log('O avatar foi clicado!'));
</script>
```
