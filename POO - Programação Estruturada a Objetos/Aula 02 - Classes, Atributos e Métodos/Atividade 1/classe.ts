class Carro {
    _modelo: string;
    _cor: string;
    _placa: string;
    _numPortas: number;

    // Métodos para Modelo
    get modelo(): string {
        return this._modelo;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }

    // Métodos para Cor
    get cor(): string {
        return this._cor;
    }

    set cor(cor: string) {
        this._cor = cor;
    }

    // Métodos para Placa
    get placa(): string {
        return this._placa;
    }

    set placa(placa: string) {
        this._placa = placa;
    }

    // Métodos para Número de Portas
    get numPortas(): number {
        return this._numPortas;
    }

    set numPortas(numPortas: number) {
        this._numPortas = numPortas;
    }
}

let c = new Carro();
c.cor = "Preto";
c.modelo = "Astra";
c.numPortas = 4;
c.placa = "ABC-1234";

console.log(`
<= Dados do carro =>
| Cor: ${c.cor} -------------------|
| Modelo: ${c.modelo} -------------|
| Número de Portas: ${c.numPortas} |
| Placa: ${c.placa} ---------------|
`); 