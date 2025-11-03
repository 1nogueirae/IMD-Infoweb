"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Object.defineProperty(Motor.prototype, "potencia", {
        get: function () {
            return this._potencia;
        },
        set: function (v) {
            this._potencia = v;
        },
        enumerable: false,
        configurable: true
    });
    return Motor;
}());
exports.Motor = Motor;
