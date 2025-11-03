"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var motor_1 = require("./motor");
var direcao_1 = require("./direcao");
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Object.defineProperty(Veiculo.prototype, "motor", {
        get: function () {
            return this._motor;
        },
        set: function (v) {
            this._motor = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "direcao", {
        get: function () {
            return this._direcao;
        },
        set: function (v) {
            this._direcao = v;
        },
        enumerable: false,
        configurable: true
    });
    Veiculo.prototype.ligar = function () {
        this._direcao = new direcao_1.Direcao;
        this._motor = new motor_1.Motor;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
