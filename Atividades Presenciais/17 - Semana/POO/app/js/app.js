"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var pessoa1 = new pessoa_1.default("Emanuel", 21, 60);
console.log(pessoa1.falar());
console.log(pessoa1.andar());
console.log("Nome: ".concat(pessoa1.nome));
console.log("Idade: ".concat(pessoa1.idade));
console.log("Peso: ".concat(pessoa1.peso, " kg"));
