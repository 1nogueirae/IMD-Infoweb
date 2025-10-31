"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
var Estudante = /** @class */ (function () {
    function Estudante(id, nome, creditos) {
        this.id = id;
        this.nome = nome;
        this.id = id;
        this.nome = nome;
        this.creditos = creditos;
    }
    Object.defineProperty(Estudante.prototype, "creditos", {
        set: function (creditos) {
            if (creditos <= 0) {
                this._creditos = 1;
            }
            else {
                this._creditos = creditos;
            }
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.exibirInfo = function () {
        return "\nID: ".concat(this.id, "\nNome: ").concat(this.nome, "\nCr\u00E9ditos: ").concat(this._creditos, "\n        ");
    };
    return Estudante;
}());
exports.Estudante = Estudante;
