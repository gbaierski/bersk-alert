# Simple Alerts - By Bersk (Gustavo Baierski)

---

### Guia de instalação e uso em Português (PT-BR):

**Explicação dos arquivos:**
- `alert.css` - Arquivo que possui a estilização dos alertas.
- `alert.js` - Arquivo que possui as funções de inicialização e as ações dos alertas.
- `index.html` - Arquivo de exemplo do funcionamento dos alertas.

**Como utilizar:**
- Com a tag `<link>`, vincular o arquivo `alert.css` na tela em que deseja-se ter os alertas;
- Com a tag `<script>`, vincular o arquivo `alert.js` na tela em que deseja-se ter os alertas;
- Utilizar a função `showAlert()` em algum script (como por exemplo um `onclick()` em um botão);
- Passar como parâmetro da função `showAlert()` o tipo de alerta que você deseja;
- Pronto! Já está funcionando :)

### Funções utilizáveis:

**Nome:** `showAlert()`
**Ação:** Exibe o alerta.
**Parâmetros:**
`string`  type (_obrigatório_) - Tipo do alerta que será exibido. Tipos válidos: **info, success, error, confirm, delete**.
`string`  text (_opcional_) - Texto que será exibido no alerta. Caso não seja informado, virá com um texto padrão.
`string` action (_opcional_) - Nome da função que será chamada ao clicar em `confirm` ou `delete` (Apenas para os tipos **confirm, delete**).

**Nome:** `closeAlert()`
**Ação:** Fecha o alerta.
**Parâmetros:** `string`  type (_obrigatório_) - Tipo do alerta que será oculto. Tipos válidos: **info, success, error, confirm, delete**.

### Funções internas:

**Nome:** `confirmAlert()`
**Ação:** Adiciona a função passada no parâmetro `action` na função `showAlert()` ao botão de confirmar / deletar do alerta.
**Parâmetros:** _nenhum_.

**Nome:** `mountAlerts()`
**Ação:** Cria os alertas no final do elemento `body`.
**Parâmetros:** _nenhum_.

---

### Installation and use guide in English (EN):

**Explanation of the files:**
- `alert.css` - File that has the style of alerts.
- `alert.js` - File that has the initialization functions and the actions of the alerts.
- `index.html` - Example file.

**How to use:**
- With the `<link>` tag, link the `alert.css` file to the screen where you want to have the alerts;
- With the `<script>` tag, link the `alert.js` file to the screen where you want to have the alerts;
- Use `showAlert()` function in some script (such as an `onclick()` on a button);
- Input the type of alert you want as a parameter of the `showAlert()` function;
- All done! It's already running :)

### Usable functions:

**Name:** `showAlert()`
**Action:** Displays the alert.
**Parameters:**
`string` type (_required_) - Type of alert that will be displayed. Valid types: **info, success, error, confirm, delete**.
`string` text (_optional_) - Text that will be displayed in the alert. If not informed, it will come with a default text.
`string` action (_optional_) - Name of the function that will be called when clicking on `confirm` or `delete` (Only for **confirm, delete** types).

**Name:** `closeAlert()`
**Action:** Closes the alert.
**Parameters:** `string` type (_required_) - Type of alert that will be hidden. Valid types: **info, success, error, confirm, delete**.

### Internal functions:

**Name:** `confirmAlert()`
**Action:** Adds the function passed in the `action` parameter in the `showAlert()` function to the confirm / delete button of the alert.
**Parameters:** _none_.

**Name:** `mountAlerts()`
**Action:** Creates the alerts at the end of the `body` element.
**Parameters:** _none_.

---

## Links

Below is a table containing links that may be useful:

| Name | Link |
| ------ | ------ |
| Github Project | https://github.com/gbaierski/bersk-alert |
| Codepen Project | https://codepen.io/gbaierski/pen/bGjJrNL |
| Github Profile | https://github.com/gbaierski |
| Codepen Profile | https://codepen.io/gbaierski |
| LinkedIn Profile | https://www.linkedin.com/in/gustavo-baierski/ |
| Instagram Profile | https://www.instagram.com/gbaierski/ |

**The use of the content of this project is free :)**
---
