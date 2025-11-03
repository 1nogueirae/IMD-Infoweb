"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armazenamento = void 0;
var Armazenamento = /** @class */ (function () {
    function Armazenamento(_tipo, _capacidadeGB) {
        this._tipo = _tipo !== null && _tipo !== void 0 ? _tipo : "Não especificado";
        this._capacidadeGB = _capacidadeGB !== null && _capacidadeGB !== void 0 ? _capacidadeGB : 0;
    }
    Object.defineProperty(Armazenamento.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Armazenamento.prototype, "capacidadeGB", {
        get: function () {
            return this._capacidadeGB;
        },
        set: function (value) {
            this._capacidadeGB = value;
        },
        enumerable: false,
        configurable: true
    });
    Armazenamento.prototype.exibirInformacoes = function () {
        console.log("Tipo: ".concat(this.tipo));
        console.log("Capacidade: ".concat(this.capacidadeGB, " GB"));
    };
    return Armazenamento;
}());
exports.Armazenamento = Armazenamento;
