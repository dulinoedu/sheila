# Textfield Web Component

`<lxp-text-field>` é um componente web customizado que representa um campo de texto altamente configurável e funcional, compatível com diferentes tipos de input e com atributos personalizados para controle e validação. Ele pode ser utilizado em diversas situações de formulários, oferecendo suporte a atributos como `disabled`, `hidden`, `label`, `max`, `min`, `required`, entre outros.

# Uso
Você  pode  incluir  o  componente  em  seu  HTML  da  seguinte  forma:
```<lxp-text-field></lxp-text-field>```

### Atributos  Suportados
#### O  componente  lxp-text-field  suporta  vários  atributos  para  personalização:
- `disabled`:  Desabilita  o  campo.
- `hidden`:  Oculta  o  campo.
- `label`:  Define  o  texto  do  rótulo  do  campo.
- `id`:  Define  o  id  do  campo  e  associa  ao  rótulo.
- `inputmode`:  Define  o  modo  de  entrada  para  o  - `campo` (útil para  inputs  em  dispositivos  móveis).
- `max`:  Define  o  valor  máximo  permitido (para campos  numéricos  ou  de  data).
- `maxlength`:  Define  o  número  máximo  de  caracteres  permitidos.
- `min`:  Define  o  valor  mínimo  permitido (para campos  numéricos  ou  de  data).
- `minlength`:  Define  o  número  mínimo  de  caracteres  permitidos.
- `name`:  Define  o  nome  do  campo,  útil  em  formulários.
- `pattern`:  Define  um  padrão  de  expressão  regular  para  validação.
- `placeholder`:  Texto  de  dica  para  o  campo.
- `readonly`:  Define  o  campo  como  apenas  leitura.
- `required`:  Torna  o  campo  obrigatório.
- `step`:  Define  os  intervalos  de  valores  permitidos (útil para  campos  numéricos  ou  de  data).
- `type`:  Define  o  tipo  do  campo (text, number,  email,  password,  etc).
- `value`:  Define  o  valor  inicial  do  campo.

### Exemplo de uso 1: 
#### _Campo  de  Texto  Básico_
```<lxp-text-field label="Nome"  id="nome"  placeholder="Digite seu nome"></lxp-text-field>```
### Exemplo de uso 2:
#### _Campo  de  Texto  com  Validação  de  Padrão_
```<lxp-text-field label="Email"  id="email"  type="email"  required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  placeholder="Digite seu email"></lxp-text-field>```
### Exemplo de uso 3:
#### _Campo  Numérico  com  Valores  Máximo  e  Mínimo_
```<lxp-text-field label="Idade"  id="idade"  type="number"  min="18"  max="99"  step="1"  placeholder="Digite sua idade"></lxp-text-field>```

### Métodos Disponíveis
#### _O  componente  também  oferece  alguns  métodos  úteis  para  validação  de  formulários:_
- `checkValidity()`: Verifica se o campo é válido com base nas suas regras de validação.

-  `reportValidity()`: Exibe a mensagem de validação, se houver, e retorna true ou false.

-  `reset()`: Reseta o valor do  campo  para  o  estado  inicial.



### Eventos  Customizados
#### _O  lxp-text-field  despacha  eventos  customizados  em  certas  interações.  Estes  são  alguns  dos  eventos  que  você  pode  ouvir:_
- `redisabed`: Verifica se o campo é válido com base nas suas regras de validação.

-  `hiddened`: Exibe a mensagem de validação, se houver, e retorna true ou false.

-  `relabelled`: Reseta o valor do  campo  para  o  estado  inicial.

-  `changed`: Reseta o valor do  campo  para  o  estado  inicial.

-  `invalidated`: Reseta o valor do  campo  para  o  estado  inicial.

-  `reseted`: Reseta o valor do  campo  para  o  estado  inicial.
