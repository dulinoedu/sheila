# Web Component: `<lxp-text-field>`

## Visão Geral
`<lxp-text-field>` é um custom element utilizado para criar um campo de texto que se integra facilmente em formulários HTML. Ele oferece atributos e métodos customizados para interações avançadas no DOM, permitindo controle completo sobre suas propriedades e validações.

---

## Como Usar

Basta incluir a tag `<lxp-text-field>` no HTML da sua aplicação:

```html
<lxp-text-field label="Seu nome" name="username"></lxp-text-field>
```

Ou via JavaScript:

```javascript
const textField = document.createElement('lxp-text-field');
document.body.appendChild(textField);
```

---

## Atributos

Aqui estão os atributos públicos que podem ser definidos no componente:

### `disabled`
- **Descrição**: Define se o campo de texto está desativado.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `redisabed` (disparado sempre que o valor do atributo for alterado).  

**Exemplo de uso:**

```html
<lxp-text-field disabled></lxp-text-field>
```

---

### `hidden`
- **Descrição**: Define se o campo de texto está oculto.  
- **Tipo**: `Boolean`  
- **Valor Padrão**: `false`  
- **Evento disparado**: `hiddened`  

**Exemplo de uso:**

```html
<lxp-text-field hidden></lxp-text-field>
```

---

### `id`
- **Descrição**: Define o ID do campo de texto, que também é atribuído ao seu rótulo associado.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `reidentified`  

**Exemplo de uso:**

```html
<lxp-text-field id="username" label="Username"></lxp-text-field>
```

---

### `label`
- **Descrição**: Define o texto do rótulo do campo de texto.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `relabelled`  

**Exemplo de uso:**

```html
<lxp-text-field label="Seu nome"></lxp-text-field>
```

---

### `max`
- **Descrição**: Define o valor máximo aceito para o campo.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `maximised`  

**Exemplo de uso:**

```html
<lxp-text-field max="100"></lxp-text-field>
```

---

### `value`
- **Descrição**: Define o valor atual do campo de texto.  
- **Tipo**: `String`  
- **Valor Padrão**: `""`  
- **Evento disparado**: `changed`  

**Exemplo de uso:**

```html
<lxp-text-field value="Texto inicial"></lxp-text-field>
```

---

## Métodos

Os métodos a seguir podem ser invocados diretamente via JavaScript:

### `checkValidity()`
- **Descrição**: Verifica se o campo de texto é válido de acordo com suas regras de validação.  
- **Parâmetros**: Nenhum.  
- **Retorno**: `Boolean` – Retorna `true` se o campo for válido, `false` caso contrário.  

**Exemplo de uso:**

```javascript
const textField = document.querySelector('lxp-text-field');
const isValid = textField.checkValidity();
```

---

### `reportValidity()`
- **Descrição**: Exibe mensagens de erro de validação para o usuário, se o campo não for válido.  
- **Parâmetros**: Nenhum.  
- **Retorno**: `Boolean` – Retorna `true` se o campo for válido, `false` caso contrário.  

**Exemplo de uso:**

```javascript
const textField = document.querySelector('lxp-text-field');
textField.reportValidity();
```

---

### `reset()`
- **Descrição**: Redefine o valor do campo de texto para uma string vazia e limpa estados de validação.  
- **Parâmetros**: Nenhum.  
- **Evento disparado**: `reseted`  

**Exemplo de uso:**

```javascript
const textField = document.querySelector('lxp-text-field');
textField.reset();
```

---

## Exemplo Completo

```html
<lxp-text-field label="Seu nome" name="username"></lxp-text-field>

<script>
  const textField = document.querySelector('lxp-text-field');

  // Alterando atributos via JavaScript
  textField.setAttribute('disabled', true);
  textField.setAttribute('value', 'Nome exemplo');

  // Verificando validade
  if (!textField.checkValidity()) {
    textField.reportValidity();
  }

  // Resetando o campo
  textField.reset();

  // Ouvindo eventos
  textField.addEventListener('changed', () => console.log('O valor do campo foi alterado!'));
</script>
```
