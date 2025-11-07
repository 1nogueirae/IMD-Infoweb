"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imovel_1 = require("./imovel");
var casa_1 = require("./casa");
var apartamento_1 = require("./apartamento");
console.log("=== TESTES DA CLASSE IMOVEL ===\n");
// Teste 1: Criação de Imovel com valores padrão
var imovel1 = new imovel_1.Imovel();
console.log("Teste 1 - Imovel com valores padrão:");
console.log("Endere\u00E7o: ".concat(imovel1.endereco));
console.log("Pre\u00E7o: ".concat(imovel1.preco));
console.log("Valor IPTU: ".concat(imovel1.valorIPTU));
console.log("Descri\u00E7\u00E3o: ".concat(imovel1.descricao, "\n"));
// Teste 2: Criação de Imovel com valores personalizados
var imovel2 = new imovel_1.Imovel("Rua das Flores, 123", 350000, 2500, "Casa ampla com quintal");
console.log("Teste 2 - Imovel com valores personalizados:");
console.log("Endere\u00E7o: ".concat(imovel2.endereco));
console.log("Pre\u00E7o: ".concat(imovel2.preco));
console.log("Valor IPTU: ".concat(imovel2.valorIPTU));
console.log("Descri\u00E7\u00E3o: ".concat(imovel2.descricao, "\n"));
// Teste 3: Modificação via setters
imovel1.endereco = "Av. Principal, 456";
imovel1.preco = 450000;
imovel1.valorIPTU = 3000;
imovel1.descricao = "Apartamento moderno";
console.log("Teste 3 - Imovel após modificação via setters:");
console.log("Endere\u00E7o: ".concat(imovel1.endereco));
console.log("Pre\u00E7o: ".concat(imovel1.preco));
console.log("Valor IPTU: ".concat(imovel1.valorIPTU));
console.log("Descri\u00E7\u00E3o: ".concat(imovel1.descricao, "\n"));
console.log("=== TESTES DA CLASSE CASA ===\n");
// Teste 4: Criação de Casa com valores padrão
var casa1 = new casa_1.Casa();
console.log("Teste 4 - Casa com valores padrão:");
console.log("Endere\u00E7o: ".concat(casa1.endereco));
console.log("Pre\u00E7o: ".concat(casa1.preco));
console.log("Valor IPTU: ".concat(casa1.valorIPTU));
console.log("Descri\u00E7\u00E3o: ".concat(casa1.descricao));
console.log("Tamanho \u00C1rea: ".concat(casa1.tamanhoArea));
console.log("Tamanho Terreno: ".concat(casa1.tamanhoTerreno, "\n"));
// Teste 5: Criação de Casa com valores completos
var casa2 = new casa_1.Casa("Rua dos Girassóis, 789", 550000, 4500, "Casa térrea com piscina", 200, 350);
console.log("Teste 5 - Casa com valores completos:");
casa2.exibirInfo();
console.log();
// Teste 6: Modificação de Casa via setters
casa1.endereco = "Rua das Palmeiras, 321";
casa1.preco = 620000;
casa1.valorIPTU = 5000;
casa1.descricao = "Casa de 2 andares";
casa1.tamanhoArea = 250;
casa1.tamanhoTerreno = 400;
console.log("Teste 6 - Casa após modificação:");
casa1.exibirInfo();
console.log();
console.log("=== TESTES DA CLASSE APARTAMENTO ===\n");
// Teste 7: Criação de Apartamento com valores padrão
var apto1 = new apartamento_1.Apartamento();
console.log("Teste 7 - Apartamento com valores padrão:");
console.log("Endere\u00E7o: ".concat(apto1.endereco));
console.log("Pre\u00E7o: ".concat(apto1.preco));
console.log("Valor IPTU: ".concat(apto1.valorIPTU));
console.log("Descri\u00E7\u00E3o: ".concat(apto1.descricao));
console.log("Taxa de Condom\u00EDnio: ".concat(apto1.valorTxCond, "\n"));
// Teste 8: Criação de Apartamento com valores completos
var apto2 = new apartamento_1.Apartamento("Av. Beira Mar, 1000 - Apto 501", 480000, 3200, "Apartamento com vista para o mar", 850);
console.log("Teste 8 - Apartamento com valores completos:");
apto2.exibirInfo();
console.log();
// Teste 9: Modificação de Apartamento via setters
apto1.endereco = "Rua Central, 555 - Apto 102";
apto1.preco = 390000;
apto1.valorIPTU = 2800;
apto1.descricao = "Apartamento 3 quartos";
apto1.valorTxCond = 650;
console.log("Teste 9 - Apartamento após modificação:");
apto1.exibirInfo();
console.log();
console.log("=== TESTES CONCLUÍDOS ===");
