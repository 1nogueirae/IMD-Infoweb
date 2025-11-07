"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartamento = void 0;
var imovel_1 = require("./imovel");
var Apartamento = /** @class */ (function (_super) {
    __extends(Apartamento, _super);
    function Apartamento(_endereco, _preco, _valorIPTU, _descricao, _valorTxCond) {
        var _this = _super.call(this, _endereco, _preco, _valorIPTU, _descricao) || this;
        _this._valorTxCond = _valorTxCond;
        _this.valorTxCond = _valorTxCond !== null && _valorTxCond !== void 0 ? _valorTxCond : -1;
        return _this;
    }
    Apartamento.prototype.exibirInfo = function () {
        console.log("Informa\u00E7\u00F5es sobre Apartamento:\nEndere\u00E7o: ".concat(this.endereco, "\nPre\u00E7o: ").concat(this.preco, "\nValor do IPTU: ").concat(this.valorIPTU, "\nDescri\u00E7\u00E3o: ").concat(this.descricao, "\nValor da Taxa de Condom\u00EDnio: ").concat(this._valorTxCond));
    };
    Object.defineProperty(Apartamento.prototype, "valorTxCond", {
        get: function () {
            return this._valorTxCond;
        },
        set: function (v) {
            this._valorTxCond = v;
        },
        enumerable: false,
        configurable: true
    });
    return Apartamento;
}(imovel_1.Imovel));
exports.Apartamento = Apartamento;
