"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nacionalidade = void 0;
class Nacionalidade {
    constructor(nacionalidade) {
        this._nacionalidade = nacionalidade !== null && nacionalidade !== void 0 ? nacionalidade : "Não especificado";
    }
    set nacionalidade(v) {
        this._nacionalidade = v;
    }
    get nacionalidade() {
        return this._nacionalidade;
    }
    exibirInformacoes() {
        console.log(`Nacionalidade: ${this.nacionalidade}`);
    }
}
exports.Nacionalidade = Nacionalidade;
