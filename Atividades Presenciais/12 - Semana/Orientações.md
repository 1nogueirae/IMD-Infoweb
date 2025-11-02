Atividade 1

Crie uma classe Produto com os seguintes atributos: id, nome, preço, estoque. Os atributos id e nome devem ser definidos no construtor, o id não pode ser modificado após a criação. O atributo estoque deve ser um número inteiro e é privado. A classe dever ter um método de acesso que não permita valores menor que zero (0), caso isso ocorra deverá receber um valor padrão 1.

Crie uma classe Funcionario com os seguintes atributos: id, nome, matricula e função. Em seguida crie um construtor que permite inicializar um Unfcuinário com todos os valores necessários para os seus atributos: id, nome, matrícula e função. Nessa ordem de parâmetros. Crie um outro construtor para que nos seus parâmetros, somente o nome e função sejam obrigatórios, e os demais (id, matrícula e preço) sejam opcionais. Nesse caso, realize a modificação da implementação do construtor para obedecer as seguinte regras:

● Caso o parâmetro "id" não seja informado, você deve setar o valor do atributo "id" por padrão para um numero aleatório entre 100 e 999 somado a data atual (dia + mês + ano).

● Caso o parâmetro "matricula" não seja informado, você deve setar o valor do atributo "matricula" por padrão para ser igual ao id.

Crie nas duas classes, um método chamado "detalhar" que mostra com o console.log os valores de cada atributo.

Para testar suas classes, crie 1 instancia de produto e 2 instancias de funcionário.  Execute o método "detalhar" para cada uma das três instancias e verifique se os valores dos atributos estão corretos.

Atividade 2

Você está criando um sistema de músicas, onde a playlist é um array:
Exemplo

let playlist = ["Shape of You", "Blinding Lights", "Levitating"];


O usuário quer:
1. Adicionar músicas no início da playlist;
2. Adicionar músicas no fim da playlist;

Ao adicionar músicas deve ser chamado o método que dado uma array passada como argumento retorna a lista sem nenhum valor repetido. A assinatura do método e alguns casos de testes (assim como as expectativas de saída) estão abaixo:

const unico = (array) => {
// Implemente aqui a sua lógica
}
let exemplo = [1, 2, 3, 1, 2];
console.log(unico(exemplo)); // [ 1, 2, 3 ]
exemplo = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(unico(exemplo)); // [ 'a', 'b', 'd', 'e' ]
exemplo = [true, false, false, true, true, false, false];
console.log(unico(exemplo)); // [ true, false ]

3. Descobrir a posição de uma música;
4. Trocar uma música.

Escreva o código html para ser possível realizar cada uma das etapas acima e mostre a playlist final em uma lista numerada em que o usuário pode clicar para tocar a música. No caso da ação de tocar a música deve ser apresentado a mensagem "Tocando a música X" sendo X o nome da música que o usuário clicou para tocar.