"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nome = void 0;
var Nome = /** @class */ (function () {
    function Nome(_nome) {
        this._nome = _nome !== null && _nome !== void 0 ? _nome : "Não especificado";
    }
    Object.defineProperty(Nome.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (v) {
            this._nome = v;
        },
        enumerable: false,
        configurable: true
    });
    Nome.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
    };
    return Nome;
}());
exports.Nome = Nome;
