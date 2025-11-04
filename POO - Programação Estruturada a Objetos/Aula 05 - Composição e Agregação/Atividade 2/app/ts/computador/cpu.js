"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPU = void 0;
class CPU {
    constructor(_modelo, _velocidadeGHz) {
        this._modelo = _modelo !== null && _modelo !== void 0 ? _modelo : "Não especificado";
        this._velocidadeGHz = _velocidadeGHz !== null && _velocidadeGHz !== void 0 ? _velocidadeGHz : 0;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }
    get velocidadeGHz() {
        return this._velocidadeGHz;
    }
    set velocidadeGHz(value) {
        this._velocidadeGHz = value;
    }
    exibirInformacoes() {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Velocidade: ${this.velocidadeGHz} GHz`);
    }
}
exports.CPU = CPU;
