"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
var armazenamento_1 = require("./armazenamento");
var cpu_1 = require("./cpu");
var ram_1 = require("./ram");
var Computador = /** @class */ (function () {
    function Computador(_armazenamento, _cpu, _ram) {
        this._armazenamento = _armazenamento !== null && _armazenamento !== void 0 ? _armazenamento : new armazenamento_1.Armazenamento();
        this._cpu = _cpu !== null && _cpu !== void 0 ? _cpu : new cpu_1.CPU();
        this._ram = _ram !== null && _ram !== void 0 ? _ram : new ram_1.RAM();
    }
    Object.defineProperty(Computador.prototype, "armazenamento", {
        get: function () {
            return this._armazenamento;
        },
        set: function (value) {
            this._armazenamento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "cpu", {
        get: function () {
            return this._cpu;
        },
        set: function (value) {
            this._cpu = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "ram", {
        get: function () {
            return this._ram;
        },
        set: function (value) {
            this._ram = value;
        },
        enumerable: false,
        configurable: true
    });
    Computador.prototype.exibirInformacoes = function () {
        console.log("Informações do Computador:");
        console.log("CPU:");
        this.cpu.exibirInformacoes();
        console.log("RAM:");
        this.ram.exibirInformacoes();
        console.log("Armazenamento:");
        this.armazenamento.exibirInformacoes();
    };
    return Computador;
}());
exports.Computador = Computador;
