export class RAM {
    private _capacidadeGB: number;

    constructor(_capacidadeGB?: number) {
        this._capacidadeGB = _capacidadeGB ?? 0;
    }

    get capacidadeGB(): number {
        return this._capacidadeGB;
    }
    set capacidadeGB(value: number) {
        this._capacidadeGB = value;
    }

    exibirInformacoes(): void {
        console.log(`Capacidade: ${this.capacidadeGB} GB`);
    }

}