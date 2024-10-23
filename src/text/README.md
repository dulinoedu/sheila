# Web Component: `<lxp-text>`

## Visão Geral
`<lxp-text>` é um custom element utilizado para exibir texto com opções de personalização de estilo, como cor, tamanho, peso e visibilidade. Ele oferece atributos e métodos customizados para interações avançadas no DOM.

---

## Como Usar

Basta incluir a tag `<lxp-text>` no HTML da sua aplicação:

```html
<lxp-text color="red" display="true" size="lg" weight="bold"></lxp-text>
```

Ou via JavaScript:

```javascript
const texto = document.createElement('lxp-text');
texto.setAttribute('color', 'blue');
document.body.appendChild(texto);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `color`
- **Descrição**: Define a cor do texto exibido.  
- **Tipo**: `String`  
- **Valor Padrão**: `""` (sem cor definida)  
- **Evento disparado**: `colorChanged` (disparado sempre que o valor do atributo for alterado).  

**Exemplo de uso:**

```html
<lxp-text color="green"></lxp-text>
```

---

### `display`
- **Descrição**: Define se o texto deve ser exibido ou não. Este é um atributo booleano.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `displayChanged`  

**Exemplo de uso:**

```html
<lxp-text display="true"></lxp-text>
```

---

### `size`
- **Descrição**: Define o tamanho do texto exibido. Aceita valores como `"sm"`, `"md"` ou `"lg"`.  
- **Tipo**: `String`  
- **Valor Padrão**: `"sm"`  
- **Evento disparado**: `sizeChanged`  

**Exemplo de uso:**

```html
<lxp-text size="md"></lxp-text>
```

---

### `weight`
- **Descrição**: Define o peso da fonte do texto exibido, como `"regular"` ou `"bold"`.  
- **Tipo**: `String`  
- **Valor Padrão**: `"regular"`  
- **Evento disparado**: `weightChanged`  

**Exemplo de uso:**

```html
<lxp-text weight="bold"></lxp-text>
```

---

## Métodos

O componente `<lxp-text>` não possui métodos públicos customizados.

---

## Exemplo Completo

```html
<lxp-text color="black" display="true" size="lg" weight="regular"></lxp-text>

<script>
  const componente = document.querySelector('lxp-text');

  // Alterando atributo via JavaScript
  componente.setAttribute('color', 'red');
  componente.setAttribute('display', 'false');

  // Ouvindo eventos
  componente.addEventListener('colorChanged', () => console.log('A cor do texto foi alterada!'));
  componente.addEventListener('displayChanged', () => console.log('A visibilidade do texto foi alterada!'));
</script>
```
