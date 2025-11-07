# Semana 13 - POO e FrontEnd II

## 1. Crie a classe Imovel, que possui um endereço, um preço, valor do IPTU e uma descrição.

### 1.1 Crie a classe Apartamento, que herda Imovel e possui ainda o valor da taxa de condomínio.

### 1.2 Crie a classe Casa, que herda Imovel e possui ainda o tamanho da área construída e terreno.

### 1.3 Crie nas classes Casa e Apartamento um método que imprime todas as informações de uma instância.

## 2. Faça o que é pedido a seguir:

### 2.1 Escreva uma função que dado um objeto e um array passados como argumentos, retorne esse objeto com todas as propriedades listadas no array removidas.

### 2.2 Escreva uma função que dado um array de arrays passado como argumento retorne um objeto formado por elementos do array com dois elementos (chave, valor). Por exemplo, se for passado como argumento o array:

```javascript
const entries = [['name', 'John'], ['age', 30], ['city', 'New York']];
const obj = suaFuncao(entries);
console.log(obj); // Output: { name: 'John', age: 30, city: 'New York' }

const entries = [['name', 'John'], ['age', 30]];
const obj = suaFuncao(entries);
console.log(obj); // Output: { name: 'John', age: 30}
```

### 2.3 Usando a função anterior, crie uma função que dado um array de arrays passado como argumento retorne um array de objetos formado por elementos do array com dois elementos (chave, valor). Por exemplo, se for passado como argumento o array:

```javascript
const entries = [[['name', 'John'], ['age', 30]],[['name', 'Anne'], ['age', 10]]];
const obj = suaOutraFuncao(entries);
console.log(obj); // Output: [{ name: 'John', age: 30},{ name: 'Anne', age: 20}]
```

## 3. Utilizando HTML, JS e seus conhecimentos sobre manipulação de DOM crie uma interface que permita adicionar em um array objetos contendo: nome, idade e cidade, de acordo com os seguintes requisitos:

### 3.1 O campo nome deve ser um campo de texto, o campo idade deve ser um campo numerico, o campo cidade deve ser uma lista suspensa contendo o nome de todas as cidades do RN.

### 3.2 Deve conter um botão que permita adicionar os objetos no array com os dados informados na interface.

### 3.3 Sempre que um objeto for adicionado a lista os dados devem ser exibidos na tela em uma tabela com padrão de cores alternadas por linha.
