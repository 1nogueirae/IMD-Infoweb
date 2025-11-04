"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armazenamento = void 0;
class Armazenamento {
    constructor(_tipo, _capacidadeGB) {
        this._tipo = _tipo !== null && _tipo !== void 0 ? _tipo : "Não especificado";
        this._capacidadeGB = _capacidadeGB !== null && _capacidadeGB !== void 0 ? _capacidadeGB : 0;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get capacidadeGB() {
        return this._capacidadeGB;
    }
    set capacidadeGB(value) {
        this._capacidadeGB = value;
    }
    exibirInformacoes() {
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Capacidade: ${this.capacidadeGB} GB`);
    }
}
exports.Armazenamento = Armazenamento;
