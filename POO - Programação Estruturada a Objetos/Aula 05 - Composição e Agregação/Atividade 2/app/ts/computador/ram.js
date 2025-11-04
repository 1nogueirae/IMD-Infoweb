"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAM = void 0;
class RAM {
    constructor(_capacidadeGB) {
        this._capacidadeGB = _capacidadeGB !== null && _capacidadeGB !== void 0 ? _capacidadeGB : 0;
    }
    get capacidadeGB() {
        return this._capacidadeGB;
    }
    set capacidadeGB(value) {
        this._capacidadeGB = value;
    }
    exibirInformacoes() {
        console.log(`Capacidade: ${this.capacidadeGB} GB`);
    }
}
exports.RAM = RAM;
