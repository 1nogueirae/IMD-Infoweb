import Pessoa from "./pessoa";

let pessoa1 = new Pessoa("Emanuel", 21, 60);

console.log(pessoa1.falar());
console.log(pessoa1.andar());

console.log(`Nome: ${pessoa1.nome}`);
console.log(`Idade: ${pessoa1.idade}`);
console.log(`Peso: ${pessoa1.peso} kg`);