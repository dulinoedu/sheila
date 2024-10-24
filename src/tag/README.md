# Web Component: `<lxp-tag>`

## Visão Geral
`<lxp-tag>` é um custom element utilizado para criar tags interativas no DOM, com suporte a seleção, desabilitação e personalização de valor. Ele oferece funcionalidades para seleção de tags, além de disparar eventos personalizados ao ser clicado.

---

## Como Usar

Basta incluir a tag `<lxp-tag>` no HTML da sua aplicação:

```html
<lxp-tag value="example">Tag Label</lxp-tag>

Ou via JavaScript:

```javascript
const tag = document.createElement('lxp-tag');
document.body.appendChild(tag);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `disabled`
- **Descrição**: Desabilita a tag, prevenindo interações. 
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `disabledChanged` (disparado sempre que o valor do atributo for alterado).

**Exemplo de uso:**

```html
<lxp-tag disabled>Tag Label</lxp-tag>
```

---

### `value`
- **Descrição**: Define o valor associado à tag.  
- **Tipo**: `String`  
- **Evento disparado**: `valueChanged`

**Exemplo de uso:**

```html
<lxp-tag value="my-value">Tag Label</lxp-tag>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `click()`
- **Descrição**: Dispara o evento de clique na tag, respeitando as regras de interação (como desabilitado). 
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `clicked` (disparado quando o tag é clicada).

**Exemplo de uso:**

```javascript
const tag = document.querySelector('lxp-tag');
tag.click();
```

---

## Exemplo Completo

```html
<lxp-tag value="my-tag" disabled>Tag Label</lxp-tag>

<script>
  const tag = document.querySelector('lxp-tag');

  // Alterando atributos via JavaScript
  tag.setAttribute('disabled', true);
  tag.value = 'new-value';

  // Executando métodos
  tag.click();

  // Ouvindo eventos
  tag.addEventListener('clicked', () => console.log('Tag foi clicada!'));
  tag.addEventListener('disabledChanged', () => console.log('Atributo disabled alterado!'));
</script>
```
