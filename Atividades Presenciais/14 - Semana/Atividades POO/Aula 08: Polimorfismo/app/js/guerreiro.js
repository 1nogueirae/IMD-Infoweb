"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var personagem_js_1 = require("./personagem.js");
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro() {
        return _super.call(this) || this;
    }
    Guerreiro.prototype.atacar = function () {
        console.log("recebi 10 de dano");
    };
    return Guerreiro;
}(personagem_js_1.Personagem));
exports.Guerreiro = Guerreiro;
