export class Nacionalidade {
    private _nacionalidade: string;

    constructor(nacionalidade?: string) {
        this._nacionalidade = nacionalidade ?? "Não especificado";
    }

    
    public set nacionalidade(v : string) {
        this._nacionalidade = v;
    }

    public get nacionalidade() : string {
        return this._nacionalidade;
    }

    exibirInformacoes(): void {
        console.log(`Nacionalidade: ${this.nacionalidade}`);
    }
    
}