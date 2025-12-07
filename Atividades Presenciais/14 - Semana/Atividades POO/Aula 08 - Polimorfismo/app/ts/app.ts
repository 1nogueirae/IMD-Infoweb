import { Guerreiro } from "./guerreiro.js";
import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";

function atacarPersonagem(fulano: Personagem) {
    fulano.atacar();
}

console.log("=== Testes de Polimorfismo ===\n");

// Teste com Personagem base
console.log("Personagem base:");
let personagem1 = new Personagem();
atacarPersonagem(personagem1);

// Teste com Guerreiro
console.log("\nGuerreiro:");
let guerreiro1 = new Guerreiro();
atacarPersonagem(guerreiro1);

// Teste com Arqueiro
console.log("\nArqueiro:");
let arqueiro1 = new Arqueiro();
atacarPersonagem(arqueiro1);

console.log("\n=== Fim dos Testes ===");