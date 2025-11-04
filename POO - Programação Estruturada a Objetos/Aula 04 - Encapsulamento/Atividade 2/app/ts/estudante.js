"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
class Estudante {
    constructor(id, nome, creditos) {
        this.id = id;
        this.nome = nome;
        this.id = id;
        this.nome = nome;
        this.creditos = creditos;
    }
    set creditos(creditos) {
        if (creditos <= 0) {
            this._creditos = 1;
        }
        else {
            this._creditos = creditos;
        }
    }
    exibirInfo() {
        return `
ID: ${this.id}
Nome: ${this.nome}
Créditos: ${this._creditos}
        `;
    }
}
exports.Estudante = Estudante;
