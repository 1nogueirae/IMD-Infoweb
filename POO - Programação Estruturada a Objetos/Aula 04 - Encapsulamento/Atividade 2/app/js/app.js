"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estudante_1 = require("./estudante");
var ana = new estudante_1.Estudante(1, "Ana", -12);
console.log(ana.exibirInfo()); // Créditos: 1
var joao = new estudante_1.Estudante(2, "João", 0);
console.log(joao.exibirInfo()); // Créditos: 1
var maria = new estudante_1.Estudante(3, "Maria", 10);
console.log(maria.exibirInfo()); // Créditos: 10
// Testando o setter
maria.creditos = -5;
console.log(maria.creditos); // 1
