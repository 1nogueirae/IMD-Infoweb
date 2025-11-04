"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
let veiculo = new veiculo_1.Veiculo();
veiculo.ligar();
veiculo.motor.potencia = 1000; // mil cilindradas
console.log(veiculo.motor.potencia);
