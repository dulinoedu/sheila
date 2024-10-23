# Web Component: `<lxp-icon>`

## Visão Geral
`<lxp-icon>` é um custom element utilizado para renderizar ícones customizados no DOM. Ele permite a modificação dinâmica de atributos como `use`, que determina o ícone a ser exibido, e dispara eventos quando esses atributos são alterados.

---

## Como Usar

Basta incluir a tag `<lxp-icon>` no HTML da sua aplicação:

```html
<lxp-icon use="home"></lxp-icon>
```

Ou via JavaScript:

```javascript
const icon = document.createElement('lxp-icon');
icon.setAttribute('use', 'settings');
document.body.appendChild(icon);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `use`
- **Descrição**: Define qual ícone será exibido pelo componente. O valor do atributo é automaticamente convertido para minúsculas.  
- **Tipo**: `String`  
- **Valor Padrão**: `""` (vazio)  
- **Evento disparado**: `useChanged` (disparado sempre que o valor do atributo `use` for alterado).  

**Exemplo de uso:**

```html
<lxp-icon use="user"></lxp-icon>
```

---

## Métodos

O componente `<lxp-icon>` não possui métodos públicos customizados. Toda a interação com o componente se dá através do atributo `use` e dos eventos disparados quando ele é modificado.

---

## Exemplo Completo

```html
<lxp-icon use="dashboard"></lxp-icon>

<script>
  const icon = document.querySelector('lxp-icon');

  // Alterando o atributo via JavaScript
  icon.setAttribute('use', 'search');

  // Ouvindo o evento de alteração do atributo
  icon.addEventListener('useChanged', () => {
    console.log('Atributo "use" foi alterado para:', icon.getAttribute('use'));
  });
</script>
```
