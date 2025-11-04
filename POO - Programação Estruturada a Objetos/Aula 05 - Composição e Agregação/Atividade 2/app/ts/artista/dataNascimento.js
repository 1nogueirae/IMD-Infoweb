"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNascimento = void 0;
class DataNascimento {
    constructor(dataNascimento) {
        this._dataNascimento = dataNascimento !== null && dataNascimento !== void 0 ? dataNascimento : "Não especificado";
    }
    set dataNascimento(v) {
        this._dataNascimento = v;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    exibirInformacoes() {
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
    }
}
exports.DataNascimento = DataNascimento;
