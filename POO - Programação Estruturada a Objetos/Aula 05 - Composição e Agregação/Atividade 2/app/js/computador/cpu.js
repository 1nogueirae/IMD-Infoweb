"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPU = void 0;
var CPU = /** @class */ (function () {
    function CPU(_modelo, _velocidadeGHz) {
        this._modelo = _modelo !== null && _modelo !== void 0 ? _modelo : "Não especificado";
        this._velocidadeGHz = _velocidadeGHz !== null && _velocidadeGHz !== void 0 ? _velocidadeGHz : 0;
    }
    Object.defineProperty(CPU.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (value) {
            this._modelo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPU.prototype, "velocidadeGHz", {
        get: function () {
            return this._velocidadeGHz;
        },
        set: function (value) {
            this._velocidadeGHz = value;
        },
        enumerable: false,
        configurable: true
    });
    CPU.prototype.exibirInformacoes = function () {
        console.log("Modelo: ".concat(this.modelo));
        console.log("Velocidade: ".concat(this.velocidadeGHz, " GHz"));
    };
    return CPU;
}());
exports.CPU = CPU;
