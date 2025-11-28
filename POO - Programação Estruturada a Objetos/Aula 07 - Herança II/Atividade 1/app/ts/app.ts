import { CelularBasico } from "./celularbasico";
import { CelularMultimidia } from "./celularmultimidia";
import { Smartphone } from "./smartphone";

console.log("=== TESTES - HIERARQUIA DE CELULARES ===\n");

// ========================================
// TESTE 1: CelularBasico
// ========================================
console.log("--- TESTE 1: CelularBasico ---");
const celularBasico1 = new CelularBasico("(84) 99999-1111", "123456789012345");
console.log("\nInformações do celular básico:");
celularBasico1.exibirInfo();
console.log("\nTestando funcionalidades:");
celularBasico1.ligar();
celularBasico1.enviarSMS();

console.log("\nTestando getters:");
console.log(`Número: ${celularBasico1.numero}`);
console.log(`IMEI: ${celularBasico1.imei}`);

console.log("\nTestando setters:");
celularBasico1.numero = "(84) 99999-2222";
celularBasico1.imei = "987654321098765";
console.log(`Novo número: ${celularBasico1.numero}`);
console.log(`Novo IMEI: ${celularBasico1.imei}`);

// ========================================
// TESTE 2: CelularMultimidia
// ========================================
console.log("\n\n--- TESTE 2: CelularMultimidia ---");
const celularMultimidia1 = new CelularMultimidia(
    "(84) 98888-3333",
    "111222333444555",
    8,
    5.5
);
console.log("\nInformações do celular multimídia:");
celularMultimidia1.exibirInfo();

console.log("\nTestando funcionalidades herdadas:");
celularMultimidia1.ligar();
celularMultimidia1.enviarSMS();

console.log("\nTestando novas funcionalidades:");
celularMultimidia1.tocarMP3();
celularMultimidia1.tirarFoto();

console.log("\nTestando getters específicos:");
console.log(`Câmera: ${celularMultimidia1.cameraMP} MP`);
console.log(`Tamanho da Tela: ${celularMultimidia1.tamanhoTela} polegadas`);

console.log("\nTestando setters específicos:");
celularMultimidia1.cameraMP = 12;
celularMultimidia1.tamanhoTela = 6.0;
console.log(`Nova câmera: ${celularMultimidia1.cameraMP} MP`);
console.log(`Novo tamanho da tela: ${celularMultimidia1.tamanhoTela} polegadas`);

// ========================================
// TESTE 3: Smartphone
// ========================================
console.log("\n\n--- TESTE 3: Smartphone ---");
const smartphone1 = new Smartphone(
    "(84) 97777-4444",
    "999888777666555",
    48,
    6.7,
    "Android 14",
    true
);
console.log("\nInformações do smartphone:");
smartphone1.exibirInfo();

console.log("\nTestando funcionalidades herdadas de CelularBasico:");
smartphone1.ligar();
smartphone1.enviarSMS();

console.log("\nTestando funcionalidades herdadas de CelularMultimidia:");
smartphone1.tocarMP3();
smartphone1.tirarFoto();

console.log("\nTestando funcionalidades específicas do Smartphone:");
smartphone1.acessoWeb();
smartphone1.iniciarOS();
smartphone1.listarApps();

console.log("\nTestando getters específicos:");
console.log(`Versão do OS: ${smartphone1.versaoOS}`);
console.log(`Conexão 5G: ${smartphone1.conexao5G ? "Sim" : "Não"}`);

console.log("\nTestando setters específicos:");
smartphone1.versaoOS = "Android 15";
smartphone1.conexao5G = false;
console.log(`Nova versão do OS: ${smartphone1.versaoOS}`);
console.log(`Nova conexão 5G: ${smartphone1.conexao5G ? "Sim" : "Não"}`);

// ========================================
// TESTE 4: Múltiplas instâncias
// ========================================
console.log("\n\n--- TESTE 4: Múltiplas instâncias ---");
const smartphone2 = new Smartphone(
    "(84) 96666-5555",
    "444555666777888",
    64,
    6.9,
    "iOS 17",
    true
);
console.log("\nSegundo smartphone criado:");
smartphone2.exibirInfo();

const celularBasico2 = new CelularBasico("(84) 95555-6666", "222333444555666");
console.log("\nSegundo celular básico criado:");
celularBasico2.exibirInfo();

console.log("\n\n=== TESTES CONCLUÍDOS ===");
