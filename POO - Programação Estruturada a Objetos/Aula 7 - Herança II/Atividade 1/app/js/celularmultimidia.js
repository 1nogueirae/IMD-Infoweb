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
exports.CelularMultimidia = void 0;
var celularbasico_1 = require("./celularbasico");
var CelularMultimidia = /** @class */ (function (_super) {
    __extends(CelularMultimidia, _super);
    function CelularMultimidia(numero, imei, _cameraMP, _tamanhoTela) {
        var _this = _super.call(this, numero, imei) || this;
        _this._cameraMP = _cameraMP;
        _this._tamanhoTela = _tamanhoTela;
        _this.cameraMP = _cameraMP !== null && _cameraMP !== void 0 ? _cameraMP : -1;
        _this.tamanhoTela = _tamanhoTela !== null && _tamanhoTela !== void 0 ? _tamanhoTela : -1;
        return _this;
    }
    CelularMultimidia.prototype.exibirInfo = function () {
        _super.prototype.exibirInfo.call(this);
        console.log("C\u00E2mera: ".concat(this.cameraMP, " MP\nTamanho da Tela: ").concat(this.tamanhoTela, " polegadas"));
    };
    CelularMultimidia.prototype.tocarMP3 = function () {
        console.log("Tocando música em MP3...");
    };
    CelularMultimidia.prototype.tirarFoto = function () {
        console.log("Foto tirada com sucesso!");
    };
    Object.defineProperty(CelularMultimidia.prototype, "cameraMP", {
        get: function () {
            return this._cameraMP;
        },
        set: function (v) {
            this._cameraMP = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CelularMultimidia.prototype, "tamanhoTela", {
        get: function () {
            return this._tamanhoTela;
        },
        set: function (v) {
            this._tamanhoTela = v;
        },
        enumerable: false,
        configurable: true
    });
    return CelularMultimidia;
}(celularbasico_1.CelularBasico));
exports.CelularMultimidia = CelularMultimidia;
