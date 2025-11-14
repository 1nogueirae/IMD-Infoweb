import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    constructor() {
        super();
    }

    public atacar(): void {
        console.log("recebi 10 de dano");
    }
}