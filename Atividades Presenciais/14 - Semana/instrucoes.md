# Semana 14 - POO e FrontEnd II

## 1. Programação Orientada a Objetos

### Lista de Exercícios – Aula 07: Herança II

Você deve criar uma classe chamada `Animal`, contendo um atributo público chamado "grupo" do tipo string, com o valor padrão definido como "indefinido". Em seguida, crie uma classe chamada `Cachorro` que herda de `Animal`. No construtor da classe `Cachorro`, você deve atribuir ao atributo "grupo" (herdado de `Animal`) o valor "mamífero".

### Lista de Exercícios – Aula 08: Polimorfismo

Esta lista apresenta uma questão única focada em sobrescrita de métodos.

#### 1.1 Escreva uma classe chamada `Personagem` com um método chamado `atacar`. Quando chamado, esse método deve exibir no console a mensagem: "Não recebi dano".

#### 1.2 Crie outras duas classes chamadas `Guerreiro` e `Arqueiro`, que herdam de `Personagem`. Ambas devem sobrescrever o método `atacar`:
- O Guerreiro deve exibir: "recebi 10 de dano".
- O Arqueiro deve exibir: "recebi 20 de dano".

#### 1.3 Crie uma função chamada `atacarPersonagem(fulano: Personagem)` que executa o método `atacar` do objeto passado por parâmetro.

#### 1.4 Utilizando polimorfismo, instancie um objeto do tipo `Guerreiro` e outro do tipo `Arqueiro` e utilize a função `atacarPersonagem` com esses objetos.

## 2. Desenvolvimento Front-End II

### Lista de Exercícios – Aula 06: Eventos

O objetivo deste laboratório é praticar a utilização de eventos em páginas web com JavaScript. Você deve salvar o código HTML abaixo em um arquivo chamado `calculadora.html`.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Calculadora</title>
</head>
<body>
<label
>Potência de 3 do número:
<input type="number" id="potencia-input" size="2" />
</label>
<button id="potencia-button">Calculate</button>
 <br /><br />
<label
>Metade desse número:
<input type="number" id="metade-input" size="2" />
</label>
<button id="metade-button">Calculate</button>
 <br /><br />
<label
>Calcular a área de um círculo de raio:
<input type="number" id="area-input" size="2" />
</label>
<button id="area-button">Calculate</button>
<br /><br />
<div id="solucao"></div>
</body>
</html>
```

**Instruções de implementação:**

#### 2.1 Adicione uma tag `script` referenciando um arquivo externo chamado `script.js`, onde todo o código JavaScript será incluído.

#### 2.2 Crie funções para cada operação: uma que retorne a potência de 3 (cubo) de um número; uma que retorne a metade de um número; e uma que retorne a área de um círculo dado um raio N.

#### 2.3 Para cada operação, crie um escutador de evento (event listener) para o respectivo botão. Quando clicado, o código deve capturar o valor do `input` apropriado e mostrar o resultado na `div` com id `solucao`.

#### 2.4 Bônus: Faça com que a página também responda a eventos de teclado, mapeando algumas teclas para as ações.

### Lista de Exercícios – Aula 07: JSON

Neste laboratório, o foco é a manipulação de dados no formato JSON. Salve o código abaixo em um arquivo chamado `index.html`.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Vídeos mais vistos do Youtube</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
</head>
<body>
<div class="container">
<h1>Vídeos mais vistos do Youtube</h1>
<div class="list-group" id="principal">
<a href="https://www.youtube.com/watch?v=XqZsoesa55w" class="list-group-item list-group-item-action">
Baby Shark Dance
</a>
</div>
</div>
<script>
var videos =
'{ "mais vistos": [' +
'{ "youtubeId": "hT_nvWrelhg", "title": "Counting Stars" },' +
'{ "youtubeId": "YQHsXMglC9A", "title": "Hello" },' +
'{ "youtubeId": "09R8_2nJtjg", "title": "Sugar" },' +
'{ "youtubeId": "pRpeEdMmmQ0", "title": "Waka Waka" } ]}';
</script>
</body>
</html>
```

**Instruções de implementação:**

#### 3.1 Você deve inserir dentro da `div` com id `principal` um link para cada um dos elementos contidos na variável `videos` (que está em formato de string JSON). Os novos links devem ter as mesmas classes do modelo ("Baby Shark Dance") já presente no HTML.

#### 3.2 Lembre-se de fazer isso dinamicamente, manipulando o DOM via JavaScript. O resultado final deve exibir a lista de vídeos (Counting Stars, Hello, Sugar, Waka Waka) abaixo do exemplo inicial.

**Dica:** Transforme a string JSON em um objeto JavaScript antes de iterar sobre ela.
