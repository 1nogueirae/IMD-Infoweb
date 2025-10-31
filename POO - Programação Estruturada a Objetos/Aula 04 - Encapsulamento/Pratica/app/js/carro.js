"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(fabricante, _modelo, _cor, _placa, _numPortas) {
        this.fabricante = fabricante;
        this._modelo = _modelo;
        this._cor = _cor;
        this._placa = _placa;
        this._numPortas = _numPortas;
        if (_numPortas == undefined || _numPortas < 2) {
            throw new Error('Número de portas deve ser pelo menos 2.');
        }
    }
    Object.defineProperty(Carro.prototype, "numPortas", {
        get: function () {
            return this._numPortas;
        },
        set: function (numPortas) {
            if (numPortas < 2) {
                throw new Error('Número de portas deve ser pelo menos 2.');
            }
            this._numPortas = numPortas;
        },
        enumerable: false,
        configurable: true
    });
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
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        set: function (placa) {
            this._placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.exibirInfo = function () {
        return "\nFabricante: ".concat(this.fabricante, "\nModelo: ").concat(this.modelo, "\nCor: ").concat(this.cor, "\nPlaca: ").concat(this.placa, "\nN\u00FAmero de Portas: ").concat(this.numPortas, "\n        ");
    };
    return Carro;
}());
exports.Carro = Carro;
