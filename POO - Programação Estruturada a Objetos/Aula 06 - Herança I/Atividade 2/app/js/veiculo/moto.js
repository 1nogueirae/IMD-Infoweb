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
exports.Moto = void 0;
var veiculo_1 = require("./veiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, ano, velocidadeAtual, _cilindradas) {
        var _this = _super.call(this, marca, modelo, ano, velocidadeAtual) || this;
        _this._cilindradas = _cilindradas;
        _this.cilindradas = _cilindradas !== null && _cilindradas !== void 0 ? _cilindradas : -1;
        return _this;
    }
    Moto.prototype.exibirInfo = function () {
        _super.prototype.exibirInfo.call(this, "Moto");
        console.log("Cilindradas: " + this.cilindradas);
    };
    Object.defineProperty(Moto.prototype, "cilindradas", {
        get: function () {
            return this._cilindradas;
        },
        set: function (v) {
            this._cilindradas = v;
        },
        enumerable: false,
        configurable: true
    });
    Moto.prototype.empinar = function () {
        console.log("Empinando moto...");
    };
    return Moto;
}(veiculo_1.Veiculo));
exports.Moto = Moto;
