# Web Component: `<lxp-header>`

## Visão Geral
`<lxp-header>` é um custom element usado para compor o cabeçalho de uma aplicação, incluindo um logotipo (usando o `<lxp-logo>`) e um avatar (usando o `<lxp-avatar>`). O componente suporta a personalização através de slots e fornece uma estrutura flexível para adicionar mais elementos ao header, como títulos ou ícones adicionais.

---

## Como Usar

Basta incluir a tag `<lxp-header>` no HTML da sua aplicação:

```html
<lxp-header>
  <lxp-logo slot="leading" src="//donna.sistemadulino.com.br/dulino_azul.svg" alt="Dulino"></lxp-logo>
  <lxp-avatar slot="trailing" src="" alt="Zezim Dev"></lxp-avatar>
</lxp-header>

Ou via JavaScript:

```javascript
const header = document.createElement('lxp-header');
const logo = document.createElement('lxp-logo');
logo.setAttribute('slot', 'leading');
logo.setAttribute('src', '//donna.sistemadulino.com.br/dulino_azul.svg');
header.appendChild(logo);

const avatar = document.createElement('lxp-avatar');
avatar.setAttribute('slot', 'trailing');
avatar.setAttribute('src', '');
header.appendChild(avatar);

document.body.appendChild(header);
```

---

## Slots

O componente <lxp-header> utiliza três slots nomeados para posicionamento de conteúdo:

### `leading`
- **Descrição**: Slot usado para inserir o logotipo ou ícones que ficam à esquerda do cabeçalho.  
- **Tipo de Conteúdo Aceito**: Qualquer elemento HTML.  

**Exemplo de uso:**

```html
<lxp-header>
  <lxp-logo slot="leading" src="//donna.sistemadulino.com.br/dulino_azul.svg" alt="Dulino"></lxp-logo>
</lxp-header>
```

---

### `headline`
- **Descrição**: Slot opcional para incluir um título ou qualquer elemento textual no centro do header. 
- **Tipo de Conteúdo Aceito**: Qualquer elemento HTML. 

**Exemplo de uso:**

```html
<lxp-header>
  <h1 slot="headline">Título da Página</h1>
</lxp-header>
```

---

### `trailing`
- **Descrição**: Slot utilizado para incluir o avatar ou ações que ficam à direita do cabeçalho. 
- **Tipo de Conteúdo Aceito**: Qualquer elemento HTML. 

**Exemplo de uso:**

```html
<lxp-header>
  <lxp-avatar slot="trailing" src="" alt="Zezim Dev"></lxp-avatar>
</lxp-header>
```

## Exemplo Completo

```html
<lxp-header>
  <lxp-logo slot="leading" src="//donna.sistemadulino.com.br/dulino_azul.svg" alt="Dulino"></lxp-logo>
  <h1 slot="headline">Título da Página</h1>
  <lxp-avatar slot="trailing" src="" alt="Zezim Dev"></lxp-avatar>
</lxp-header>

<script>
  const header = document.querySelector('lxp-header');

  // Alterando o logo via JavaScript
  const logo = header.querySelector('lxp-logo');
  logo.setAttribute('src', 'nova_url_do_logo.svg');
  logo.setAttribute('alt', 'Novo Texto Alternativo');

  // Alterando o avatar via JavaScript
  const avatar = header.querySelector('lxp-avatar');
  avatar.setAttribute('src', 'nova_url_do_avatar.jpg');
  avatar.setAttribute('alt', 'Novo Nome');
</script>
```
