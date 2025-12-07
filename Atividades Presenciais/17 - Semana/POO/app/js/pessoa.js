"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _idade, _peso) {
        this._nome = _nome;
        this._idade = _idade;
        this._peso = _peso;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.falar = function () {
        return "".concat(this.nome, " falou");
    };
    Pessoa.prototype.andar = function () {
        return "".concat(this.nome, " andou");
    };
    return Pessoa;
}());
exports.default = Pessoa;
