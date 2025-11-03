export class Armazenamento {
    private _tipo: string;
    private _capacidadeGB: number;

    constructor(_tipo?: string, _capacidadeGB?: number) {
        this._tipo = _tipo ?? "Não especificado";
        this._capacidadeGB = _capacidadeGB ?? 0;
    }

    get tipo(): string {
        return this._tipo;
    }
    set tipo(value: string) {
        this._tipo = value;
    }

    get capacidadeGB(): number {
        return this._capacidadeGB;
    }
    set capacidadeGB(value: number) {
        this._capacidadeGB = value;
    }

    exibirInformacoes(): void {
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Capacidade: ${this.capacidadeGB} GB`);
    }

}