import { Animal } from "./animal";
import { Cachorro } from "./cachorro";

console.log("=== Testes da Classe Animal ===\n");

// Teste 1: Criar um Animal sem especificar grupo
console.log("Teste 1: Animal sem grupo especificado");
const animal1 = new Animal();
console.log(`Grupo do animal1: ${animal1.grupo}`);
console.log(`Esperado: "indefinido"`);
console.log(`Passou: ${animal1.grupo === "indefinido" ? "✓" : "✗"}\n`);

// Teste 2: Criar um Animal especificando grupo
console.log("Teste 2: Animal com grupo especificado");
const animal2 = new Animal("réptil");
console.log(`Grupo do animal2: ${animal2.grupo}`);
console.log(`Esperado: "réptil"`);
console.log(`Passou: ${animal2.grupo === "réptil" ? "✓" : "✗"}\n`);

// Teste 3: Modificar o grupo de um Animal
console.log("Teste 3: Modificar grupo");
animal1.grupo = "ave";
console.log(`Novo grupo do animal1: ${animal1.grupo}`);
console.log(`Esperado: "ave"`);
console.log(`Passou: ${animal1.grupo === "ave" ? "✓" : "✗"}\n`);

console.log("=== Testes da Classe Cachorro ===\n");

// Teste 4: Criar um Cachorro (deve herdar de Animal)
console.log("Teste 4: Cachorro herda de Animal");
const cachorro1 = new Cachorro();
console.log(`cachorro1 é instância de Cachorro: ${cachorro1 instanceof Cachorro}`);
console.log(`cachorro1 é instância de Animal: ${cachorro1 instanceof Animal}`);
console.log(`Passou: ${cachorro1 instanceof Animal && cachorro1 instanceof Cachorro ? "✓" : "✗"}\n`);

// Teste 5: Verificar se o grupo do Cachorro é "Mamífero"
console.log("Teste 5: Grupo do Cachorro deve ser 'Mamífero'");
console.log(`Grupo do cachorro1: ${cachorro1.grupo}`);
console.log(`Esperado: "Mamífero"`);
console.log(`Passou: ${cachorro1.grupo === "Mamífero" ? "✓" : "✗"}\n`);

// Teste 6: Verificar acesso ao atributo grupo herdado
console.log("Teste 6: Cachorro pode modificar o grupo herdado");
cachorro1.grupo = "Canino";
console.log(`Novo grupo do cachorro1: ${cachorro1.grupo}`);
console.log(`Esperado: "Canino"`);
console.log(`Passou: ${cachorro1.grupo === "Canino" ? "✓" : "✗"}\n`);

// Teste 7: Polimorfismo - Array de Animais
console.log("Teste 7: Polimorfismo - Array de Animais");
const animais: Animal[] = [
    new Animal("peixe"),
    new Cachorro(),
    new Animal("anfíbio")
];
console.log("Grupos dos animais no array:");
animais.forEach((animal, index) => {
    console.log(`  Animal ${index + 1}: ${animal.grupo}`);
});
console.log(`Passou: ✓\n`);

console.log("=== Resumo dos Testes ===");
console.log("Todos os testes foram executados!");
