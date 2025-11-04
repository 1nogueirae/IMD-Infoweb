import { Veiculo } from "./veiculo/veiculo"
import { Carro } from "./veiculo/carro";
import { Moto } from "./veiculo/moto";
import { Caminhao } from "./veiculo/caminhao";

let veiculoTeste = new Veiculo()
veiculoTeste.marca = "Nissan";
veiculoTeste.modelo = "Skyline R-34";
veiculoTeste.ano = 2002;

veiculoTeste.exibirInfo();

console.log("\n------\n");

let carro = new Carro();
carro.marca = "Honda";
carro.modelo = "Civic";
carro.ano = 2025;
carro.numeroPortas = 4;

carro.exibirInfo();

console.log("\n------\n");

let moto = new Moto();
moto.marca = "Honda"
moto.modelo = "CG"
moto.ano = 2019;
moto.cilindradas = 160;

moto.exibirInfo();

console.log("\n------\n");

let caminhao = new Caminhao();
caminhao.marca = "Scania"
caminhao.modelo = "IOSD23"
caminhao.ano = 2036
caminhao.capacidadeCarga = 300;
caminhao.cargaAtual = 20;

caminhao.exibirInfo();

// -------------------
// Testes das classes
// -------------------
console.log("\n===== TESTES =====\n");

// Teste Veiculo
veiculoTeste.acelerar(50);
veiculoTeste.frear(20);
console.log("Veiculo - Velocidade após acelerar e frear:", veiculoTeste.velocidadeAtual === 30 ? "OK" : "Erro");

// Teste Carro
carro.abrirPortaMalas();
carro.acelerar(60);
console.log("Carro - Velocidade após acelerar:", carro.velocidadeAtual === 60 ? "OK" : "Erro");
console.log("Carro - Número de portas:", carro.numeroPortas === 4 ? "OK" : "Erro");

// Teste Moto
moto.empinar();
moto.acelerar(80);
console.log("Moto - Velocidade após acelerar:", moto.velocidadeAtual === 80 ? "OK" : "Erro");
console.log("Moto - Cilindradas:", moto.cilindradas === 160 ? "OK" : "Erro");

// Teste Caminhao
caminhao.carregar(50);
caminhao.descarregar(10);
caminhao.acelerar(90); // Testa limite de velocidade
console.log("Caminhao - Carga Atual:", caminhao.cargaAtual === 60 ? "OK" : "Erro");
console.log("Caminhao - Velocidade (máx 100):", caminhao.velocidadeAtual <= 100 ? "OK" : "Erro");