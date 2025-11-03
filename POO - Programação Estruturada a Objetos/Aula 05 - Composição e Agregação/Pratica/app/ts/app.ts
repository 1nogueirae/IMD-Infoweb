import { Veiculo } from "./veiculo";

let veiculo = new Veiculo();
veiculo.ligar();

veiculo.motor.potencia = 1000; // mil cilindradas
console.log(veiculo.motor.potencia);