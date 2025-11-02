"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(id, nome, matricula, funcao) {
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.funcao = funcao;
        if (id === undefined) {
            var dataAtual = new Date();
            var numAleatorio = Math.floor(Math.random() * 900) + 100;
            var somaDataAtual = dataAtual.getDate() + (dataAtual.getMonth() + 1) + Number(dataAtual.getFullYear() % 100);
            this.id = numAleatorio + somaDataAtual;
        }
        if (matricula === undefined) {
            this.matricula = this.id;
        }
    }
    Funcionario.prototype.detalhar = function () {
        return "ID: ".concat(this.id, "\n        Nome: ").concat(this.nome, "\n        Matr\u00EDcula: ").concat(this.matricula, "\n        Fun\u00E7\u00E3o: ").concat(this.funcao, ".");
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
