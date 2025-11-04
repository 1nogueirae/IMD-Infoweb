export class Veiculo {

    constructor(
        private _marca?: string,
        private _modelo?: string,
        private _ano?: number,
        private _velocidadeAtual?: number
    ) {
        this.marca = _marca ?? "Não especificada."
        this.modelo = _modelo ?? "Não especificado."
        this.ano = _ano ?? -1;
        this.velocidadeAtual = 0;
    }

    public exibirInfo(tipo?: string): void {
        tipo = tipo ?? "Veículo";
        console.log(
`- Informações sobre o/a ${tipo} -
Marca: ${this.marca}
Modelo: ${this.modelo}
Ano: ${this.ano}
Velocidade Atual: ${this.velocidadeAtual}`)
    }

    public set marca(v: string) {
        this._marca = v;
    }
    public get marca(): string {
        return this._marca;
    }

    public set modelo(v: string) {
        this._modelo = v;
    }
    public get modelo(): string {
        return this._modelo
    }

    public set ano(v: number) {
        this._ano = v;
    }

    public get ano(): number {
        return this._ano;
    }

    public set velocidadeAtual(v: number) {
        this._velocidadeAtual = v;
    }
    public get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public acelerar(v: number): void {
        this.velocidadeAtual += v;
    }
    public frear(v: number): void {
        this.velocidadeAtual -= v;
    }

}