export class Produto {

    constructor(readonly id: number, public nome: string, public preco?: number, private _estoque?: number) {
    }

    get estoque(): number {
        return this._estoque;
    }

    set estoque(value: number) {
        if (value < 0) {
            this._estoque = 1;
        } else {
            this._estoque = value;
        }
        
    }

    detalhar(): string {
        return `ID: ${this.id}
        Nome: ${this.nome}
        Preço: R$ ${this.preco.toFixed(2)}
        Estoque: ${this.estoque} unidades.`;
    }   
}