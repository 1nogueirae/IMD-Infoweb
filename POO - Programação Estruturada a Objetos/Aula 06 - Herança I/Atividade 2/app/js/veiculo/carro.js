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
exports.Carro = void 0;
var veiculo_1 = require("./veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, velocidadeAtual, _numeroPortas) {
        var _this = _super.call(this, marca, modelo, ano, velocidadeAtual) || this;
        _this._numeroPortas = _numeroPortas;
        _this.numeroPortas = _numeroPortas !== null && _numeroPortas !== void 0 ? _numeroPortas : -1;
        return _this;
    }
    Carro.prototype.exibirInfo = function () {
        _super.prototype.exibirInfo.call(this, "Carro");
        console.log("Número de Portas: " + this.numeroPortas);
    };
    Object.defineProperty(Carro.prototype, "numeroPortas", {
        get: function () {
            return this._numeroPortas;
        },
        set: function (v) {
            this._numeroPortas = v;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.abrirPortaMalas = function () {
        console.log("Abrindo porta malas...");
    };
    return Carro;
}(veiculo_1.Veiculo));
exports.Carro = Carro;
