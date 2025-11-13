export class CelularBasico {
    constructor(
        private _numero: string,
        private _IMEI: string,
    ) {
        this.numero = _numero ?? "Não especificado.";
        this.imei = _IMEI ?? "Não especificado.";
    }

    exibirInfo(): void {
        console.log(`Número: ${this.numero}
IMEI: ${this.imei}`);
    }

    public ligar(): void {
        console.log("Ligando...");
    }
    public enviarSMS(): void {
        console.log("Enviando SMS...");
    }

    public get numero(): string {
        return this._numero;
    }
    public set numero(v: string) {
        this._numero = v;
    }

    get imei(): string {
        return this._IMEI;
    }
    set imei(v: string) {
        this._IMEI = v;
    }
}