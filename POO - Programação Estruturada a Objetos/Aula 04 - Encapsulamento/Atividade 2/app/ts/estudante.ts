export class Estudante {

    private _creditos: number;

    constructor(
        readonly id: number,
        public nome: string,
        creditos: number
    ) {
        this.id = id;
        this.nome = nome;
        this.creditos = creditos;
    }

    set creditos(creditos: number) {
        if (creditos <= 0) {
            this._creditos = 1;
        } else {
            this._creditos = creditos;
        }
    }

    exibirInfo(): string {
        return `
ID: ${this.id}
Nome: ${this.nome}
Créditos: ${this._creditos}
        `;
    }
}