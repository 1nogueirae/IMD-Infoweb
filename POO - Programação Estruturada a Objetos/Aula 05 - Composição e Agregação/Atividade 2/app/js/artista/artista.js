"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artista = void 0;
var nome_1 = require("./nome");
var nacionalidade_1 = require("./nacionalidade");
var dataNascimento_1 = require("./dataNascimento");
var Artista = /** @class */ (function () {
    function Artista(nome, nacionalidade, dataNascimento) {
        this._nome = nome !== null && nome !== void 0 ? nome : new nome_1.Nome();
        this._nacionalidade = nacionalidade !== null && nacionalidade !== void 0 ? nacionalidade : new nacionalidade_1.Nacionalidade();
        this._dataNascimento = dataNascimento !== null && dataNascimento !== void 0 ? dataNascimento : new dataNascimento_1.DataNascimento();
    }
    Object.defineProperty(Artista.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (v) {
            this._nome = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artista.prototype, "nacionalidade", {
        get: function () {
            return this._nacionalidade;
        },
        set: function (v) {
            this._nacionalidade = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artista.prototype, "dataNascimento", {
        get: function () {
            return this._dataNascimento;
        },
        enumerable: false,
        configurable: true
    });
    Artista.prototype.exibirInformacoes = function () {
        this.nome.exibirInformacoes();
        this.dataNascimento.exibirInformacoes();
        this.nacionalidade.exibirInformacoes();
    };
    return Artista;
}());
exports.Artista = Artista;
