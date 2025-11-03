export class Nome {
    private _nome: string;

    constructor(_nome?: string) {
        this._nome = _nome ?? "Não especificado";
    }


    public set nome(v: string) {
        this._nome = v;
    }

    public get nome(): string {
        return this._nome;
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
    }
}