"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(_marca, _modelo, _ano, _velocidadeAtual) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._ano = _ano;
        this._velocidadeAtual = _velocidadeAtual;
        this.marca = _marca !== null && _marca !== void 0 ? _marca : "Não especificada.";
        this.modelo = _modelo !== null && _modelo !== void 0 ? _modelo : "Não especificado.";
        this.ano = _ano !== null && _ano !== void 0 ? _ano : -1;
        this.velocidadeAtual = 0;
    }
    Veiculo.prototype.exibirInfo = function (tipo) {
        tipo = tipo !== null && tipo !== void 0 ? tipo : "Veículo";
        console.log("- Informa\u00E7\u00F5es sobre o/a ".concat(tipo, " -\nMarca: ").concat(this.marca, "\nModelo: ").concat(this.modelo, "\nAno: ").concat(this.ano, "\nVelocidade Atual: ").concat(this.velocidadeAtual));
    };
    Object.defineProperty(Veiculo.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (v) {
            this._marca = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (v) {
            this._modelo = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (v) {
            this._ano = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "velocidadeAtual", {
        get: function () {
            return this._velocidadeAtual;
        },
        set: function (v) {
            this._velocidadeAtual = v;
        },
        enumerable: false,
        configurable: true
    });
    Veiculo.prototype.acelerar = function (v) {
        this.velocidadeAtual += v;
    };
    Veiculo.prototype.frear = function (v) {
        this.velocidadeAtual -= v;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
