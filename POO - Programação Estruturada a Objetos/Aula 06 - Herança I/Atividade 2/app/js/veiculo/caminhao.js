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
exports.Caminhao = void 0;
var veiculo_1 = require("./veiculo");
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao(marca, modelo, ano, velocidadeAtual, _capacidadeCarga, _cargaAtual) {
        var _this = _super.call(this, marca, modelo, ano, velocidadeAtual) || this;
        _this._capacidadeCarga = _capacidadeCarga;
        _this._cargaAtual = _cargaAtual;
        _this._capacidadeCarga = _capacidadeCarga !== null && _capacidadeCarga !== void 0 ? _capacidadeCarga : -1;
        _this._cargaAtual = _cargaAtual !== null && _cargaAtual !== void 0 ? _cargaAtual : -1;
        return _this;
    }
    Caminhao.prototype.exibirInfo = function () {
        _super.prototype.exibirInfo.call(this, "Caminhão");
        console.log("Capacidade de Carga: ".concat(this.capacidadeCarga, ";\nCarga Atual: ").concat(this.cargaAtual));
    };
    Object.defineProperty(Caminhao.prototype, "cargaAtual", {
        get: function () {
            return this._cargaAtual;
        },
        set: function (v) {
            this._cargaAtual = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Caminhao.prototype, "capacidadeCarga", {
        get: function () {
            return this._capacidadeCarga;
        },
        set: function (v) {
            this._capacidadeCarga = v;
        },
        enumerable: false,
        configurable: true
    });
    Caminhao.prototype.carregar = function (peso) {
        this.cargaAtual += peso;
    };
    Caminhao.prototype.descarregar = function (peso) {
        this.cargaAtual -= peso;
    };
    Caminhao.prototype.acelerar = function (v) {
        if (this.velocidadeAtual <= 100) {
            this.velocidadeAtual += v;
        }
    };
    return Caminhao;
}(veiculo_1.Veiculo));
exports.Caminhao = Caminhao;
