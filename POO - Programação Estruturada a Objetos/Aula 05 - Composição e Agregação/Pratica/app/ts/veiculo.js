"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
const motor_1 = require("./motor");
const direcao_1 = require("./direcao");
class Veiculo {
    get motor() {
        return this._motor;
    }
    set motor(v) {
        this._motor = v;
    }
    get direcao() {
        return this._direcao;
    }
    set direcao(v) {
        this._direcao = v;
    }
    ligar() {
        this._direcao = new direcao_1.Direcao;
        this._motor = new motor_1.Motor;
    }
}
exports.Veiculo = Veiculo;
