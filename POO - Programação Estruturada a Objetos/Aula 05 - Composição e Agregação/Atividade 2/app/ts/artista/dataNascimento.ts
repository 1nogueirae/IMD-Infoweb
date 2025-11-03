export class DataNascimento {

    private _dataNascimento: string;

    constructor(dataNascimento?: string) {
        this._dataNascimento = dataNascimento ?? "Não especificado";
    }

    public set dataNascimento(v: string) {
        this._dataNascimento = v;
    }

    public get dataNascimento(): string {
        return this._dataNascimento;
    }

    exibirInformacoes(): void {
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
    }

}