import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    constructor() {
        super();
    }

    public atacar(): void {
        console.log("recebi 20 de dano");
    }
}