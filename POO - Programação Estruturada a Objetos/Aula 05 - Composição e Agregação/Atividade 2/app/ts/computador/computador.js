"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
const armazenamento_1 = require("./armazenamento");
const cpu_1 = require("./cpu");
const ram_1 = require("./ram");
class Computador {
    constructor(_armazenamento, _cpu, _ram) {
        this._armazenamento = _armazenamento !== null && _armazenamento !== void 0 ? _armazenamento : new armazenamento_1.Armazenamento();
        this._cpu = _cpu !== null && _cpu !== void 0 ? _cpu : new cpu_1.CPU();
        this._ram = _ram !== null && _ram !== void 0 ? _ram : new ram_1.RAM();
    }
    get armazenamento() {
        return this._armazenamento;
    }
    set armazenamento(value) {
        this._armazenamento = value;
    }
    get cpu() {
        return this._cpu;
    }
    set cpu(value) {
        this._cpu = value;
    }
    get ram() {
        return this._ram;
    }
    set ram(value) {
        this._ram = value;
    }
    exibirInformacoes() {
        console.log("Informações do Computador:");
        console.log("CPU:");
        this.cpu.exibirInformacoes();
        console.log("RAM:");
        this.ram.exibirInformacoes();
        console.log("Armazenamento:");
        this.armazenamento.exibirInformacoes();
    }
}
exports.Computador = Computador;
