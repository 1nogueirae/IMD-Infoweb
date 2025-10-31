"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var c;
c = new carro_1.Carro("Fiesta", "Vermelha", "AEC-9898", 4);
c._cor = "Vermelho";
var c2 = new carro_1.Carro("Gol", "Branca");
c2.cor = "Branca";
console.log("\n    A cor do carro ".concat(c.modelo, " \u00E9: ").concat(c.cor, " e com ").concat(c.numPortas, " portas.\n    A cor do carro ").concat(c2.modelo, " \u00E9: ").concat(c2.cor, " e com ").concat(c2.numPortas, " portas.\n    "));
