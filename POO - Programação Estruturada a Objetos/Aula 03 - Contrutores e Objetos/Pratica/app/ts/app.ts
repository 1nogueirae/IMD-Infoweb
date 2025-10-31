import { Carro } from './carro';

let c: Carro;
c = new Carro("Fiesta", "Vermelha", "AEC-9898", 4);
c._cor = "Vermelho";

let c2 = new Carro("Gol", "Branca");
c2.cor = "Branca"

console.log(
    `
    A cor do carro ${c.modelo} é: ${c.cor} e com ${c.numPortas} portas.
    A cor do carro ${c2.modelo} é: ${c2.cor} e com ${c2.numPortas} portas.
    `
);