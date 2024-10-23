# Web Component: `<lxp-menu>`

## Visão Geral
`<lxp-menu>` é um custom element utilizado para criar um menu interativo que pode ser exibido ou ocultado. Ele oferece atributos e métodos personalizados para facilitar a interação e o gerenciamento do estado de visibilidade no DOM.

---

## Como Usar

Basta incluir a tag `<lxp-menu>` no HTML da sua aplicação:

```html
<lxp-menu></lxp-menu>
```

Ou via JavaScript:

```javascript
const menu = document.createElement('lxp-menu');
document.body.appendChild(menu);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `visible`
- **Descrição**: Define se o menu está visível ou não. Quando definido como `true`, o menu será exibido; caso contrário, será ocultado.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `visibleChanged` (disparado sempre que o valor do atributo for alterado).  

**Exemplo de uso:**

```html
<lxp-menu visible="true"></lxp-menu>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `show()`
- **Descrição**: Exibe o menu, definindo o atributo `visible` como `true`.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `hidded` (disparado quando o método é chamado, indicando que o menu foi exibido).  

**Exemplo de uso:**

```javascript
const menu = document.querySelector('lxp-menu');
menu.show();
```

---

### `hide()`
- **Descrição**: Oculta o menu, removendo o atributo `visible`.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `hidded` (disparado quando o método é chamado, indicando que o menu foi oculto).  

**Exemplo de uso:**

```javascript
const menu = document.querySelector('lxp-menu');
menu.hide();
```

---

## Exemplo Completo

```html
<lxp-menu></lxp-menu>

<script>
  const menu = document.querySelector('lxp-menu');

  // Exibindo o menu via JavaScript
  menu.show();

  // Ocultando o menu
  menu.hide();

  // Ouvindo eventos
  menu.addEventListener('visibleChanged', () => console.log('Visibilidade alterada!'));
  menu.addEventListener('hidded', () => console.log('Menu ocultado ou exibido!'));
  menu.addEventListener('selected', (event) => console.log('Item selecionado:', event.detail));
</script>
```
