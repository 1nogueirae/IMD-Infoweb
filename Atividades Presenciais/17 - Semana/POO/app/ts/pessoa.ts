export default class Pessoa {
    constructor(
        private _nome: string,
        private _idade: number,
        private _peso: number
    ) { }

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public get peso(): number {
        return this._peso;
    }

    public falar(): string {
        return `${this.nome} falou`;
    }

    public andar(): string {
        return `${this.nome} andou`;
    }
}