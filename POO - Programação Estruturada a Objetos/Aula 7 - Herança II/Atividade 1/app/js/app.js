"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celularbasico_1 = require("./celularbasico");
var celularmultimidia_1 = require("./celularmultimidia");
var smartphone_1 = require("./smartphone");
console.log("=== TESTES - HIERARQUIA DE CELULARES ===\n");
// ========================================
// TESTE 1: CelularBasico
// ========================================
console.log("--- TESTE 1: CelularBasico ---");
var celularBasico1 = new celularbasico_1.CelularBasico("(84) 99999-1111", "123456789012345");
console.log("\nInformações do celular básico:");
celularBasico1.exibirInfo();
console.log("\nTestando funcionalidades:");
celularBasico1.ligar();
celularBasico1.enviarSMS();
console.log("\nTestando getters:");
console.log("N\u00FAmero: ".concat(celularBasico1.numero));
console.log("IMEI: ".concat(celularBasico1.imei));
console.log("\nTestando setters:");
celularBasico1.numero = "(84) 99999-2222";
celularBasico1.imei = "987654321098765";
console.log("Novo n\u00FAmero: ".concat(celularBasico1.numero));
console.log("Novo IMEI: ".concat(celularBasico1.imei));
// ========================================
// TESTE 2: CelularMultimidia
// ========================================
console.log("\n\n--- TESTE 2: CelularMultimidia ---");
var celularMultimidia1 = new celularmultimidia_1.CelularMultimidia("(84) 98888-3333", "111222333444555", 8, 5.5);
console.log("\nInformações do celular multimídia:");
celularMultimidia1.exibirInfo();
console.log("\nTestando funcionalidades herdadas:");
celularMultimidia1.ligar();
celularMultimidia1.enviarSMS();
console.log("\nTestando novas funcionalidades:");
celularMultimidia1.tocarMP3();
celularMultimidia1.tirarFoto();
console.log("\nTestando getters específicos:");
console.log("C\u00E2mera: ".concat(celularMultimidia1.cameraMP, " MP"));
console.log("Tamanho da Tela: ".concat(celularMultimidia1.tamanhoTela, " polegadas"));
console.log("\nTestando setters específicos:");
celularMultimidia1.cameraMP = 12;
celularMultimidia1.tamanhoTela = 6.0;
console.log("Nova c\u00E2mera: ".concat(celularMultimidia1.cameraMP, " MP"));
console.log("Novo tamanho da tela: ".concat(celularMultimidia1.tamanhoTela, " polegadas"));
// ========================================
// TESTE 3: Smartphone
// ========================================
console.log("\n\n--- TESTE 3: Smartphone ---");
var smartphone1 = new smartphone_1.Smartphone("(84) 97777-4444", "999888777666555", 48, 6.7, "Android 14", true);
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
console.log("Vers\u00E3o do OS: ".concat(smartphone1.versaoOS));
console.log("Conex\u00E3o 5G: ".concat(smartphone1.conexao5G ? "Sim" : "Não"));
console.log("\nTestando setters específicos:");
smartphone1.versaoOS = "Android 15";
smartphone1.conexao5G = false;
console.log("Nova vers\u00E3o do OS: ".concat(smartphone1.versaoOS));
console.log("Nova conex\u00E3o 5G: ".concat(smartphone1.conexao5G ? "Sim" : "Não"));
// ========================================
// TESTE 4: Múltiplas instâncias
// ========================================
console.log("\n\n--- TESTE 4: Múltiplas instâncias ---");
var smartphone2 = new smartphone_1.Smartphone("(84) 96666-5555", "444555666777888", 64, 6.9, "iOS 17", true);
console.log("\nSegundo smartphone criado:");
smartphone2.exibirInfo();
var celularBasico2 = new celularbasico_1.CelularBasico("(84) 95555-6666", "222333444555666");
console.log("\nSegundo celular básico criado:");
celularBasico2.exibirInfo();
console.log("\n\n=== TESTES CONCLUÍDOS ===");
