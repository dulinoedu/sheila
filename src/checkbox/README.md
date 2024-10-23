# Web Component: `<lxp-checkbox>`

## Visão Geral
`<lxp-checkbox>` é um custom element utilizado para criar um checkbox customizável com funcionalidades avançadas. Ele oferece atributos para controlar o estado de seleção e valor, além de métodos que facilitam a interação com o elemento no DOM, gerando eventos específicos conforme as mudanças ocorrem.

---

## Como Usar

Basta incluir a tag `<lxp-checkbox>` no HTML da sua aplicação:

```html
<lxp-checkbox selected></lxp-checkbox>
```

Ou via JavaScript:

```javascript
const checkbox = document.createElement('lxp-checkbox');
document.body.appendChild(checkbox);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `selected`
- **Descrição**: Define se o checkbox está marcado ou não.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `selectedChanged` (disparado sempre que o valor de `selected` for alterado).  

**Exemplo de uso:**

```html
<lxp-checkbox selected></lxp-checkbox>
```

---

### `value`
- **Descrição**: Define o valor associado ao checkbox, que é passado junto com o evento `checked`.  
- **Tipo**: `String`  
- **Valor Padrão**: `undefined`  
- **Evento disparado**: `valueChanged` (disparado sempre que o valor de `value` for alterado).  

**Exemplo de uso:**

```html
<lxp-checkbox value="check1"></lxp-checkbox>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `click()`
- **Descrição**: Alterna o estado do checkbox entre selecionado e não selecionado, e dispara o evento `checked` com o valor atual.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `checked` (disparado quando o checkbox é clicado).  

**Exemplo de uso:**

```javascript
const checkbox = document.querySelector('lxp-checkbox');
checkbox.click();
```

---

## Exemplo Completo

```html
<lxp-checkbox value="check1" selected></lxp-checkbox>

<script>
  const checkbox = document.querySelector('lxp-checkbox');

  // Alterando o atributo via JavaScript
  checkbox.setAttribute('selected', false);

  // Alternando o estado do checkbox
  checkbox.click();

  // Ouvindo eventos
  checkbox.addEventListener('selectedChanged', () => console.log('Checkbox selecionado alterado!'));
  checkbox.addEventListener('checked', event => console.log('Checkbox clicado!', event.detail));
</script>
```
