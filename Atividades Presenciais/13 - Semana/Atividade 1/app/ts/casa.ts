import { Imovel } from "./imovel";

export class Casa extends Imovel {
    constructor(
        _endereco?: string,
        _preco?: number,
        _valorIPTU?: number,
        _descricao?: string,
        private _tamanhoArea?: number,
        private _tamanhoTerreno?: number
    ) {
        super(_endereco, _preco, _valorIPTU, _descricao);
        this.tamanhoArea = _tamanhoArea ?? -1;
        this.tamanhoTerreno = _tamanhoTerreno ?? -1;
    }

    public exibirInfo(): void {
        console.log
            (`Informações sobre Apartamento:
Endereço: ${this.endereco}
Preço: ${this.preco}
Valor do IPTU: ${this.valorIPTU}
Descrição: ${this.descricao}
Tamanho da Área Construída: ${this.tamanhoArea}
Tamanho Total do Terreno: ${this.tamanhoTerreno}`)
    }

    public set tamanhoArea(v: number) {
        this._tamanhoArea = v;
    }
    public get tamanhoArea(): number {
        return this._tamanhoArea;
    }

    public set tamanhoTerreno(v: number) {
        this._tamanhoTerreno = v;
    }

    public get tamanhoTerreno(): number {
        return this._tamanhoTerreno;
    }
}