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
exports.Smartphone = void 0;
var celularmultimidia_1 = require("./celularmultimidia");
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(numero, imei, cameraMP, tamanhoTela, _versaoOS, _conexao5G) {
        var _this = _super.call(this, numero, imei, cameraMP, tamanhoTela) || this;
        _this._versaoOS = _versaoOS;
        _this._conexao5G = _conexao5G;
        _this.versaoOS = _versaoOS !== null && _versaoOS !== void 0 ? _versaoOS : "Não especificado.";
        _this.conexao5G = _conexao5G !== null && _conexao5G !== void 0 ? _conexao5G : false;
        return _this;
    }
    Smartphone.prototype.exibirInfo = function () {
        _super.prototype.exibirInfo.call(this);
        console.log("Vers\u00E3o do OS: ".concat(this.versaoOS, "\nConex\u00E3o 5G: ").concat(this.conexao5G ? "Sim" : "Não"));
    };
    Smartphone.prototype.acessoWeb = function () {
        console.log("Acessando a web...");
    };
    Smartphone.prototype.iniciarOS = function () {
        console.log("Iniciando o sistema operacional de versão + " + this.versaoOS);
    };
    Smartphone.prototype.listarApps = function () {
        console.log("Listando aplicativos instalados...");
    };
    Object.defineProperty(Smartphone.prototype, "versaoOS", {
        get: function () {
            return this._versaoOS;
        },
        set: function (v) {
            this._versaoOS = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Smartphone.prototype, "conexao5G", {
        get: function () {
            return this._conexao5G;
        },
        set: function (v) {
            this._conexao5G = v;
        },
        enumerable: false,
        configurable: true
    });
    return Smartphone;
}(celularmultimidia_1.CelularMultimidia));
exports.Smartphone = Smartphone;
