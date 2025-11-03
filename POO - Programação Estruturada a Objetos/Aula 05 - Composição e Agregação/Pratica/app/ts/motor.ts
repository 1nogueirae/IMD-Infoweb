export class Motor {
    private _potencia: number;

    public get potencia(): number {
        return this._potencia
    }

    public set potencia(v: number) {
        this._potencia = v;
    }
}