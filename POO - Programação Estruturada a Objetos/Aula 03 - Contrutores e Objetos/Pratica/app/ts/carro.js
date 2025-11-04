"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, cor, placa, numPortas) {
        this.modelo = modelo;
        this._cor = cor;
        this.placa = placa;
        if (numPortas != undefined) {
            this.numPortas = numPortas;
        }
        else {
            this.numPortas = 2;
        }
    }
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
    }
}
exports.Carro = Carro;
