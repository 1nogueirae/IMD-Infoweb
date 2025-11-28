"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelularBasico = void 0;
var CelularBasico = /** @class */ (function () {
    function CelularBasico(_numero, _IMEI) {
        this._numero = _numero;
        this._IMEI = _IMEI;
        this.numero = _numero !== null && _numero !== void 0 ? _numero : "Não especificado.";
        this.imei = _IMEI !== null && _IMEI !== void 0 ? _IMEI : "Não especificado.";
    }
    CelularBasico.prototype.exibirInfo = function () {
        console.log("N\u00FAmero: ".concat(this.numero, "\nIMEI: ").concat(this.imei));
    };
    CelularBasico.prototype.ligar = function () {
        console.log("Ligando...");
    };
    CelularBasico.prototype.enviarSMS = function () {
        console.log("Enviando SMS...");
    };
    Object.defineProperty(CelularBasico.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (v) {
            this._numero = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CelularBasico.prototype, "imei", {
        get: function () {
            return this._IMEI;
        },
        set: function (v) {
            this._IMEI = v;
        },
        enumerable: false,
        configurable: true
    });
    return CelularBasico;
}());
exports.CelularBasico = CelularBasico;
