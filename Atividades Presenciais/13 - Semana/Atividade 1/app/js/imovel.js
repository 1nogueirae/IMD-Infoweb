"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imovel = void 0;
var Imovel = /** @class */ (function () {
    function Imovel(_endereco, _preco, _valorIPTU, _descricao) {
        this._endereco = _endereco;
        this._preco = _preco;
        this._valorIPTU = _valorIPTU;
        this._descricao = _descricao;
        this.preco = _preco !== null && _preco !== void 0 ? _preco : -1;
        this.valorIPTU = _valorIPTU !== null && _valorIPTU !== void 0 ? _valorIPTU : -1;
        this.descricao = _descricao !== null && _descricao !== void 0 ? _descricao : "Não especificada";
    }
    Object.defineProperty(Imovel.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (v) {
            this._endereco = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Imovel.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (v) {
            this._preco = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Imovel.prototype, "valorIPTU", {
        get: function () {
            return this._valorIPTU;
        },
        set: function (v) {
            this._valorIPTU = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Imovel.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (v) {
            this._descricao = v;
        },
        enumerable: false,
        configurable: true
    });
    return Imovel;
}());
exports.Imovel = Imovel;
