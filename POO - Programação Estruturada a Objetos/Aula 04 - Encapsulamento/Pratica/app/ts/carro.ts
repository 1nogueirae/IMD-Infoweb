export class Carro {
    public constructor(
        readonly fabricante: string,
        private _modelo: string,
        private _cor: string,
        private _placa?: string,
        private _numPortas?: number
    ) {
        if (_numPortas == undefined || _numPortas < 2) {
            throw new Error('Número de portas deve ser pelo menos 2.');
        }
    }

    public get numPortas(): number {
        return this._numPortas;
    }

    public set numPortas(numPortas: number) {
        if (numPortas < 2) {
            throw new Error('Número de portas deve ser pelo menos 2.');
        }
        this._numPortas = numPortas;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(cor: string) {
        this._cor = cor;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        this._modelo = modelo;
    }

    public get placa(): string {
        return this._placa;
    }

    public set placa(placa: string) {
        this._placa = placa;
    }

    public exibirInfo(): string {
        return `
Fabricante: ${this.fabricante}
Modelo: ${this.modelo}
Cor: ${this.cor}
Placa: ${this.placa}
Número de Portas: ${this.numPortas}
        `;
    }
}