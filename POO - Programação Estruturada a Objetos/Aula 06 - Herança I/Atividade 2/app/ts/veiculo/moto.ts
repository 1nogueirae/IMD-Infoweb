import { Veiculo } from "./veiculo";

export class Moto extends Veiculo {
    constructor(
        marca?: string,
        modelo?: string,
        ano?: number,
        velocidadeAtual?: number,
        private _cilindradas?: number        
    ) {
        super(marca, modelo, ano, velocidadeAtual);
        this.cilindradas = _cilindradas ?? -1;
    }
    
    public exibirInfo() {
        super.exibirInfo("Moto");
        console.log("Cilindradas: " + this.cilindradas);
    }

    public set cilindradas(v : number) {
        this._cilindradas = v;
    }
    public get cilindradas() : number {
        return this._cilindradas
    }

    public empinar(): void {
        console.log("Empinando moto...");
    }
    
    
}