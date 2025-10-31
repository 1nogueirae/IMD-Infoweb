"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, placa, numPortas) {
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
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
exports.Carro = Carro;
