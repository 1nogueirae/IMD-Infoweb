"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(fabricante, _modelo, _cor, _placa, _numPortas) {
        this.fabricante = fabricante;
        this._modelo = _modelo;
        this._cor = _cor;
        this._placa = _placa;
        this._numPortas = _numPortas;
        if (_numPortas == undefined || _numPortas < 2) {
            throw new Error('Número de portas deve ser pelo menos 2.');
        }
    }
    get numPortas() {
        return this._numPortas;
    }
    set numPortas(numPortas) {
        if (numPortas < 2) {
            throw new Error('Número de portas deve ser pelo menos 2.');
        }
        this._numPortas = numPortas;
    }
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get placa() {
        return this._placa;
    }
    set placa(placa) {
        this._placa = placa;
    }
    exibirInfo() {
        return `
Fabricante: ${this.fabricante}
Modelo: ${this.modelo}
Cor: ${this.cor}
Placa: ${this.placa}
Número de Portas: ${this.numPortas}
        `;
    }
}
exports.Carro = Carro;
