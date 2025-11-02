"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(id, nome, preco, _estoque) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this._estoque = _estoque;
    }
    Object.defineProperty(Produto.prototype, "estoque", {
        get: function () {
            return this._estoque;
        },
        set: function (value) {
            if (value < 0) {
                this._estoque = 1;
            }
            else {
                this._estoque = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.detalhar = function () {
        return "ID: ".concat(this.id, "\n        Nome: ").concat(this.nome, "\n        Pre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\n        Estoque: ").concat(this.estoque, " unidades.");
    };
    return Produto;
}());
exports.Produto = Produto;
