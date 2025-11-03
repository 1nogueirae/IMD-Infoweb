export class CPU {
    private _modelo: string;
    private _velocidadeGHz: number;

    constructor(_modelo?: string, _velocidadeGHz?: number) {

        this._modelo = _modelo ?? "Não especificado";
        this._velocidadeGHz = _velocidadeGHz ?? 0;
    }


    get modelo(): string {
        return this._modelo;
    }
    set modelo(value: string) {
        this._modelo = value;
    }

    get velocidadeGHz(): number {
        return this._velocidadeGHz;
    }
    set velocidadeGHz(value: number) {
        this._velocidadeGHz = value;
    }

    exibirInformacoes(): void {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Velocidade: ${this.velocidadeGHz} GHz`);
    }

}