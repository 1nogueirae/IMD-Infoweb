"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAM = void 0;
var RAM = /** @class */ (function () {
    function RAM(_capacidadeGB) {
        this._capacidadeGB = _capacidadeGB !== null && _capacidadeGB !== void 0 ? _capacidadeGB : 0;
    }
    Object.defineProperty(RAM.prototype, "capacidadeGB", {
        get: function () {
            return this._capacidadeGB;
        },
        set: function (value) {
            this._capacidadeGB = value;
        },
        enumerable: false,
        configurable: true
    });
    RAM.prototype.exibirInformacoes = function () {
        console.log("Capacidade: ".concat(this.capacidadeGB, " GB"));
    };
    return RAM;
}());
exports.RAM = RAM;
