"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artista = void 0;
const nome_1 = require("./nome");
const nacionalidade_1 = require("./nacionalidade");
const dataNascimento_1 = require("./dataNascimento");
class Artista {
    constructor(nome, nacionalidade, dataNascimento) {
        this._nome = nome !== null && nome !== void 0 ? nome : new nome_1.Nome();
        this._nacionalidade = nacionalidade !== null && nacionalidade !== void 0 ? nacionalidade : new nacionalidade_1.Nacionalidade();
        this._dataNascimento = dataNascimento !== null && dataNascimento !== void 0 ? dataNascimento : new dataNascimento_1.DataNascimento();
    }
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
    get nacionalidade() {
        return this._nacionalidade;
    }
    set nacionalidade(v) {
        this._nacionalidade = v;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    exibirInformacoes() {
        this.nome.exibirInformacoes();
        this.dataNascimento.exibirInformacoes();
        this.nacionalidade.exibirInformacoes();
    }
}
exports.Artista = Artista;
