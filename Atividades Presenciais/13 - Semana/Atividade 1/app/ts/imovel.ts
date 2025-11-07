export class Imovel {
    constructor(
        private _endereco?: string,
        private _preco?: number,
        private _valorIPTU?: number,
        private _descricao?: string
    ) {
        this.preco = _preco ?? -1;
        this.valorIPTU = _valorIPTU ?? -1;
        this.descricao = _descricao ?? "Não especificada";
    }
        
    public set endereco(v : string) {
        this._endereco = v;
    }
    public get endereco() : string {
        return this._endereco;
    }    

    public set preco(v: number) {
        this._preco = v;
    }
    public get preco(): number {
        return this._preco;
    }

    public set valorIPTU(v: number) {
        this._valorIPTU = v;
    }
    public get valorIPTU(): number {
        return this._valorIPTU;
    }


    public set descricao(v: string) {
        this._descricao = v;
    }
    public get descricao(): string {
        return this._descricao;
    }
}