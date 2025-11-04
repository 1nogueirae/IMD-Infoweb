"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
let c;
c = new carro_1.Carro("Fiesta", "Vermelha", "AEC-9898", 4);
c._cor = "Vermelho";
let c2 = new carro_1.Carro("Gol", "Branca");
c2.cor = "Branca";
console.log(`
    A cor do carro ${c.modelo} é: ${c.cor} e com ${c.numPortas} portas.
    A cor do carro ${c2.modelo} é: ${c2.cor} e com ${c2.numPortas} portas.
    `);
