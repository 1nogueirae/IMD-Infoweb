"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNascimento = void 0;
var DataNascimento = /** @class */ (function () {
    function DataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento !== null && dataNascimento !== void 0 ? dataNascimento : "Não especificado";
    }
    Object.defineProperty(DataNascimento.prototype, "dataNascimento", {
        get: function () {
            return this._dataNascimento;
        },
        set: function (v) {
            this._dataNascimento = v;
        },
        enumerable: false,
        configurable: true
    });
    DataNascimento.prototype.exibirInformacoes = function () {
        console.log("Data de Nascimento: ".concat(this.dataNascimento));
    };
    return DataNascimento;
}());
exports.DataNascimento = DataNascimento;
