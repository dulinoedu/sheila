# Web Component: `<lxp-button>`

## Visão Geral
`<lxp-button>` é um custom element utilizado para criar botões interativos no DOM com suporte a diferentes variantes, tamanhos e tipos. Ele oferece funcionalidades avançadas de formulário, como envio e reset automáticos, além de disparar eventos personalizados ao ser clicado.

---

## Como Usar

Basta incluir a tag `<lxp-button>` no HTML da sua aplicação:

```html
<lxp-button size="large" type="submit" variant="secondary-outline"></lxp-button>
```

Ou via JavaScript:

```javascript
const button = document.createElement('lxp-button');
document.body.appendChild(button);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `disabled`
- **Descrição**: Desabilita o botão, prevenindo interações.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `disabledChanged` (disparado sempre que o valor do atributo for alterado).

**Exemplo de uso:**

```html
<lxp-button disabled></lxp-button>
```

---

### `size`
- **Descrição**: Define o tamanho do botão. Pode ser `small`, `medium`, ou `large`.  
- **Tipo**: `String`  
- **Valor Padrão**: `"medium"`  
- **Evento disparado**: `sizeChanged`

**Exemplo de uso:**

```html
<lxp-button size="large"></lxp-button>
```

---

### `type`
- **Descrição**: Define o tipo de ação do botão. Pode ser `submit`, `reset`, ou `button`.  
- **Tipo**: `String`  
- **Valor Padrão**: `"submit"`  
- **Evento disparado**: `typeChanged`

**Exemplo de uso:**

```html
<lxp-button type="reset"></lxp-button>
```

---

### `value`
- **Descrição**: Define o valor associado ao botão.  
- **Tipo**: `String`  
- **Evento disparado**: `valueChanged`

**Exemplo de uso:**

```html
<lxp-button value="send"></lxp-button>
```

---

### `variant`
- **Descrição**: Define o estilo visual do botão. Pode ser `primary-solid`, `secondary-outline`, etc.  
- **Tipo**: `String`  
- **Valor Padrão**: `"primary-solid"`  
- **Evento disparado**: `variantChanged`

**Exemplo de uso:**

```html
<lxp-button variant="secondary-outline"></lxp-button>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `click()`
- **Descrição**: Dispara o evento de clique no botão, respeitando as regras de interação (como desabilitado).  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `clicked` (disparado quando o botão é clicado).

**Exemplo de uso:**

```javascript
const button = document.querySelector('lxp-button');
button.click();
```

---

## Exemplo Completo

```html
<lxp-button size="large" type="submit" variant="primary-solid" value="send"></lxp-button>

<script>
  const button = document.querySelector('lxp-button');

  // Alterando atributos via JavaScript
  button.setAttribute('disabled', true);
  button.size = 'small';
  button.variant = 'secondary-outline';

  // Executando métodos
  button.click();
  button.dispatchFormAction();

  // Ouvindo eventos
  button.addEventListener('clicked', () => console.log('Botão foi clicado!'));
  button.addEventListener('disabledChanged', () => console.log('Atributo disabled alterado!'));
</script>
```
