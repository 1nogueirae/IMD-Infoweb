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
exports.Casa = void 0;
var imovel_1 = require("./imovel");
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(_endereco, _preco, _valorIPTU, _descricao, _tamanhoArea, _tamanhoTerreno) {
        var _this = _super.call(this, _endereco, _preco, _valorIPTU, _descricao) || this;
        _this._tamanhoArea = _tamanhoArea;
        _this._tamanhoTerreno = _tamanhoTerreno;
        _this.tamanhoArea = _tamanhoArea !== null && _tamanhoArea !== void 0 ? _tamanhoArea : -1;
        _this.tamanhoTerreno = _tamanhoTerreno !== null && _tamanhoTerreno !== void 0 ? _tamanhoTerreno : -1;
        return _this;
    }
    Casa.prototype.exibirInfo = function () {
        console.log("Informa\u00E7\u00F5es sobre Apartamento:\nEndere\u00E7o: ".concat(this.endereco, "\nPre\u00E7o: ").concat(this.preco, "\nValor do IPTU: ").concat(this.valorIPTU, "\nDescri\u00E7\u00E3o: ").concat(this.descricao, "\nTamanho da \u00C1rea Constru\u00EDda: ").concat(this.tamanhoArea, "\nTamanho Total do Terreno: ").concat(this.tamanhoTerreno));
    };
    Object.defineProperty(Casa.prototype, "tamanhoArea", {
        get: function () {
            return this._tamanhoArea;
        },
        set: function (v) {
            this._tamanhoArea = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casa.prototype, "tamanhoTerreno", {
        get: function () {
            return this._tamanhoTerreno;
        },
        set: function (v) {
            this._tamanhoTerreno = v;
        },
        enumerable: false,
        configurable: true
    });
    return Casa;
}(imovel_1.Imovel));
exports.Casa = Casa;
