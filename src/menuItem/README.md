# Web Component: `<lxp-menu-item>`

## Visão Geral
`<lxp-menu-item>` é um custom element utilizado para representar um item em um menu interativo. Ele permite a configuração de valores e um estado de habilitação, além de emitir eventos personalizados durante interações, como cliques.

---

## Como Usar

Basta incluir a tag `<lxp-menu-item>` no HTML da sua aplicação:

```html
<lxp-menu-item value="item1" disabled="false"></lxp-menu-item>
```

Ou via JavaScript:

```javascript
const menuItem = document.createElement('lxp-menu-item');
menuItem.value = 'item1';
document.body.appendChild(menuItem);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `disabled`
- **Descrição**: Define se o item do menu está desabilitado, impedindo interações com o usuário.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `disabledChanged` (disparado sempre que o valor do atributo for alterado).  

**Exemplo de uso:**

```html
<lxp-menu-item disabled="true"></lxp-menu-item>
```

---

### `value`
- **Descrição**: Define o valor associado ao item do menu, que pode ser utilizado em interações ou para identificação do item.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `valueChanged` (disparado sempre que o valor do atributo for alterado).  

**Exemplo de uso:**

```html
<lxp-menu-item value="novoValor"></lxp-menu-item>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `click()`
- **Descrição**: Executa a ação associada ao clique do usuário no item do menu, disparando um evento customizado com o valor do item.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `clicked` (disparado quando o item do menu é clicado, desde que não esteja desabilitado).  

**Exemplo de uso:**

```javascript
const menuItem = document.querySelector('lxp-menu-item');
menuItem.click(); // Isso irá disparar o evento 'clicked'
```

---

## Exemplo Completo

```html
<lxp-menu-item value="item1" disabled="false"></lxp-menu-item>

<script>
  const menuItem = document.querySelector('lxp-menu-item');

  // Alterando atributos via JavaScript
  menuItem.disabled = true; // Isso disparará o evento 'disabledChanged'
  menuItem.value = 'novoValor'; // Isso disparará o evento 'valueChanged'

  // Ouvindo eventos
  menuItem.addEventListener('disabledChanged', () => console.log('O estado de desabilitado foi alterado!'));
  menuItem.addEventListener('valueChanged', () => console.log('O valor do item foi alterado!'));
  menuItem.addEventListener('clicked', (event) => console.log('Item clicado com valor:', event.detail));
</script>
```
