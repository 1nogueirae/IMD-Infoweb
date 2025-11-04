import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo {
    constructor(
        marca?: string,
        modelo?: string,
        ano?: number,
        velocidadeAtual?: number,
        public _capacidadeCarga?: number,
        private _cargaAtual?: number
    ) {
        super(marca, modelo, ano, velocidadeAtual);
        this._capacidadeCarga = _capacidadeCarga ?? -1;
        this._cargaAtual = _cargaAtual ?? -1;
    }

    public exibirInfo(): void {
        super.exibirInfo("Caminhão");
        console.log(
            `Capacidade de Carga: ${this.capacidadeCarga};
Carga Atual: ${this.cargaAtual}`)
    }

    public set cargaAtual(v: number) {
        this._cargaAtual = v;
    }
    public get cargaAtual(): number {
        return this._cargaAtual;
    }

    public set capacidadeCarga(v: number) {
        this._capacidadeCarga = v;
    }
    public get capacidadeCarga(): number {
        return this._capacidadeCarga
    }

    public carregar(peso: number): void {
        this.cargaAtual += peso;
    }

    public descarregar(peso: number): void {
        this.cargaAtual -= peso;
    }

    public acelerar(v: number): void {
        if (this.velocidadeAtual <= 100) {
            this.velocidadeAtual += v;
        }
    }
}