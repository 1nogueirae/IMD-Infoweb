import { Estudante } from "./estudante";

const ana = new Estudante(1, "Ana", -12);
console.log(ana.exibirInfo()); // Créditos: 1

const joao = new Estudante(2, "João", 0);
console.log(joao.exibirInfo()); // Créditos: 1

const maria = new Estudante(3, "Maria", 10);
console.log(maria.exibirInfo()); // Créditos: 10

// Testando o setter
maria.creditos = -5;
console.log(maria.creditos); // 1