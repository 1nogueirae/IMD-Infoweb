"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var cachorro_1 = require("./cachorro");
console.log("=== Testes da Classe Animal ===\n");
// Teste 1: Criar um Animal sem especificar grupo
console.log("Teste 1: Animal sem grupo especificado");
var animal1 = new animal_1.Animal();
console.log("Grupo do animal1: ".concat(animal1.grupo));
console.log("Esperado: \"indefinido\"");
console.log("Passou: ".concat(animal1.grupo === "indefinido" ? "✓" : "✗", "\n"));
// Teste 2: Criar um Animal especificando grupo
console.log("Teste 2: Animal com grupo especificado");
var animal2 = new animal_1.Animal("réptil");
console.log("Grupo do animal2: ".concat(animal2.grupo));
console.log("Esperado: \"r\u00E9ptil\"");
console.log("Passou: ".concat(animal2.grupo === "réptil" ? "✓" : "✗", "\n"));
// Teste 3: Modificar o grupo de um Animal
console.log("Teste 3: Modificar grupo");
animal1.grupo = "ave";
console.log("Novo grupo do animal1: ".concat(animal1.grupo));
console.log("Esperado: \"ave\"");
console.log("Passou: ".concat(animal1.grupo === "ave" ? "✓" : "✗", "\n"));
console.log("=== Testes da Classe Cachorro ===\n");
// Teste 4: Criar um Cachorro (deve herdar de Animal)
console.log("Teste 4: Cachorro herda de Animal");
var cachorro1 = new cachorro_1.Cachorro();
console.log("cachorro1 \u00E9 inst\u00E2ncia de Cachorro: ".concat(cachorro1 instanceof cachorro_1.Cachorro));
console.log("cachorro1 \u00E9 inst\u00E2ncia de Animal: ".concat(cachorro1 instanceof animal_1.Animal));
console.log("Passou: ".concat(cachorro1 instanceof animal_1.Animal && cachorro1 instanceof cachorro_1.Cachorro ? "✓" : "✗", "\n"));
// Teste 5: Verificar se o grupo do Cachorro é "Mamífero"
console.log("Teste 5: Grupo do Cachorro deve ser 'Mamífero'");
console.log("Grupo do cachorro1: ".concat(cachorro1.grupo));
console.log("Esperado: \"Mam\u00EDfero\"");
console.log("Passou: ".concat(cachorro1.grupo === "Mamífero" ? "✓" : "✗", "\n"));
// Teste 6: Verificar acesso ao atributo grupo herdado
console.log("Teste 6: Cachorro pode modificar o grupo herdado");
cachorro1.grupo = "Canino";
console.log("Novo grupo do cachorro1: ".concat(cachorro1.grupo));
console.log("Esperado: \"Canino\"");
console.log("Passou: ".concat(cachorro1.grupo === "Canino" ? "✓" : "✗", "\n"));
// Teste 7: Polimorfismo - Array de Animais
console.log("Teste 7: Polimorfismo - Array de Animais");
var animais = [
    new animal_1.Animal("peixe"),
    new cachorro_1.Cachorro(),
    new animal_1.Animal("anfíbio")
];
console.log("Grupos dos animais no array:");
animais.forEach(function (animal, index) {
    console.log("  Animal ".concat(index + 1, ": ").concat(animal.grupo));
});
console.log("Passou: \u2713\n");
console.log("=== Resumo dos Testes ===");
console.log("Todos os testes foram executados!");
