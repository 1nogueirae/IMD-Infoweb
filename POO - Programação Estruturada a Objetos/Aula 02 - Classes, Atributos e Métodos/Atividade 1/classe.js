"use strict";
class Carro {
    // Métodos para Modelo
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    // Métodos para Cor
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
    }
    // Métodos para Placa
    get placa() {
        return this._placa;
    }
    set placa(placa) {
        this._placa = placa;
    }
    // Métodos para Número de Portas
    get numPortas() {
        return this._numPortas;
    }
    set numPortas(numPortas) {
        this._numPortas = numPortas;
    }
}
let c = new Carro();
c.cor = "Preto";
c.modelo = "Astra";
c.numPortas = 4;
c.placa = "ABC-1234";
console.log(`
<= Dados do carro =>
| Cor: ${c.cor} -------------------|
| Modelo: ${c.modelo} -------------|
| Número de Portas: ${c.numPortas} |
| Placa: ${c.placa} ---------------|
`);
