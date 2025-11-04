"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nome = void 0;
class Nome {
    constructor(_nome) {
        this._nome = _nome !== null && _nome !== void 0 ? _nome : "Não especificado";
    }
    set nome(v) {
        this._nome = v;
    }
    get nome() {
        return this._nome;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
    }
}
exports.Nome = Nome;
