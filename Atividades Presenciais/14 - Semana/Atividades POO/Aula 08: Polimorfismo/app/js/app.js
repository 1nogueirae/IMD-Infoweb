"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerreiro_js_1 = require("./guerreiro.js");
var arqueiro_js_1 = require("./arqueiro.js");
var personagem_js_1 = require("./personagem.js");
function atacarPersonagem(fulano) {
    fulano.atacar();
}
console.log("=== Testes de Polimorfismo ===\n");
// Teste com Personagem base
console.log("Personagem base:");
var personagem1 = new personagem_js_1.Personagem();
atacarPersonagem(personagem1);
// Teste com Guerreiro
console.log("\nGuerreiro:");
var guerreiro1 = new guerreiro_js_1.Guerreiro();
atacarPersonagem(guerreiro1);
// Teste com Arqueiro
console.log("\nArqueiro:");
var arqueiro1 = new arqueiro_js_1.Arqueiro();
atacarPersonagem(arqueiro1);
console.log("\n=== Fim dos Testes ===");
