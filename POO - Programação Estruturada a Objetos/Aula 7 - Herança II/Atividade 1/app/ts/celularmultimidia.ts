import { CelularBasico } from "./celularbasico";

export class CelularMultimidia extends CelularBasico {
    constructor(
        numero: string,
        imei: string,
        private _cameraMP: number,
        private _tamanhoTela: number,
    ) {
        super(numero, imei);
        this.cameraMP = _cameraMP ?? -1;
        this.tamanhoTela = _tamanhoTela ?? -1;
    }

    exibirInfo(): void {
        super.exibirInfo();
        console.log(`Câmera: ${this.cameraMP} MP
Tamanho da Tela: ${this.tamanhoTela} polegadas`);
    }

    public tocarMP3(): void {
        console.log("Tocando música em MP3...");
    }
    public tirarFoto(): void {
        console.log("Foto tirada com sucesso!");
    }

    public get cameraMP(): number {
        return this._cameraMP;
    }
    public set cameraMP(v: number) {
        this._cameraMP = v;
    }

    public get tamanhoTela(): number {
        return this._tamanhoTela;
    }
    public set tamanhoTela(v: number) {
        this._tamanhoTela = v;
    }
}