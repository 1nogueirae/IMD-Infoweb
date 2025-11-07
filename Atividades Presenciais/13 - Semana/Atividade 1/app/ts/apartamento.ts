import { Imovel } from "./imovel";

export class Apartamento extends Imovel {
    constructor(
        _endereco?: string,
        _preco?: number,
        _valorIPTU?: number,
        _descricao?: string,
        private _valorTxCond?: number,
    ) {
        super(_endereco, _preco, _valorIPTU, _descricao);
        this.valorTxCond = _valorTxCond ?? -1;
    }

    public exibirInfo(): void {
        console.log
            (`Informações sobre Apartamento:
Endereço: ${this.endereco}
Preço: ${this.preco}
Valor do IPTU: ${this.valorIPTU}
Descrição: ${this.descricao}
Valor da Taxa de Condomínio: ${this._valorTxCond}`)
    }

    public set valorTxCond(v: number) {
        this._valorTxCond = v;
    }
    public get valorTxCond(): number {
        return this._valorTxCond;
    }


}