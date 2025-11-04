import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
    constructor(
        marca?: string,
        modelo?: string,
        ano?: number,
        velocidadeAtual?: number,
        private _numeroPortas?: number) {
        super(marca, modelo, ano, velocidadeAtual)
        this.numeroPortas = _numeroPortas ?? -1;
    }

    public exibirInfo(): void {
        super.exibirInfo("Carro");
        console.log("Número de Portas: " + this.numeroPortas)
    }

    public get numeroPortas(): number {
        return this._numeroPortas;
    }
    public set numeroPortas(v: number) {
        this._numeroPortas = v;
    }

    public abrirPortaMalas():void {
        console.log("Abrindo porta malas...");
    }

}