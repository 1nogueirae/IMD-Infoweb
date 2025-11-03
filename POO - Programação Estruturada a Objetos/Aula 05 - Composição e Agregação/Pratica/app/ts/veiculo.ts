import { Motor } from "./motor"
import { Direcao } from "./direcao";

export class Veiculo {
    private _motor: Motor;
    private _direcao: Direcao;

    public get motor(): Motor {
        return this._motor;
    }

    public set motor(v: Motor) {
        this._motor = v;
    }

    public get direcao(): Direcao {
        return this._direcao
    }

    public set direcao(v: Direcao) {
        this._direcao = v;
    }

    public ligar() {
        this._direcao = new Direcao;
        this._motor = new Motor;
    }

}