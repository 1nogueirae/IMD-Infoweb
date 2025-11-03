import { Computador } from "./computador/computador";
import { Artista } from "./artista/artista"

let computador = new Computador();

computador.armazenamento.tipo = "SSD";
computador.armazenamento.capacidadeGB = 512;

computador.cpu.modelo = "Intel Core i7";
computador.cpu.velocidadeGHz = 3.6;

computador.ram.capacidadeGB = 16;

computador.exibirInformacoes();

console.log("\n");

let artista = new Artista();

artista.nome.nome = "Kevin Parker"
artista.nacionalidade.nacionalidade = "Australiano"
artista.dataNascimento.dataNascimento = "20/01/1986"

artista.exibirInformacoes();