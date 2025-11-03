"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nacionalidade = void 0;
var Nacionalidade = /** @class */ (function () {
    function Nacionalidade(nacionalidade) {
        this._nacionalidade = nacionalidade !== null && nacionalidade !== void 0 ? nacionalidade : "Não especificado";
    }
    Object.defineProperty(Nacionalidade.prototype, "nacionalidade", {
        get: function () {
            return this._nacionalidade;
        },
        set: function (v) {
            this._nacionalidade = v;
        },
        enumerable: false,
        configurable: true
    });
    Nacionalidade.prototype.exibirInformacoes = function () {
        console.log("Nacionalidade: ".concat(this.nacionalidade));
    };
    return Nacionalidade;
}());
exports.Nacionalidade = Nacionalidade;
