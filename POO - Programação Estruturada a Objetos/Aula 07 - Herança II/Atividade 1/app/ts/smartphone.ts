import { CelularMultimidia } from "./celularmultimidia";

export class Smartphone extends CelularMultimidia {
    constructor(
        numero: string,
        imei: string,
        cameraMP: number,
        tamanhoTela: number,
        private _versaoOS: string,
        private _conexao5G: boolean,
    ) {
        super(numero, imei, cameraMP, tamanhoTela);
        this.versaoOS = _versaoOS ?? "Não especificado.";
        this.conexao5G = _conexao5G ?? false;
    }

    exibirInfo(): void {
        super.exibirInfo();
        console.log(`Versão do OS: ${this.versaoOS}
Conexão 5G: ${this.conexao5G ? "Sim" : "Não"}`);
    }

    public acessoWeb(): void {
        console.log("Acessando a web...");
    }
    public iniciarOS(): void {
        console.log("Iniciando o sistema operacional de versão + " + this.versaoOS);
    }
    public listarApps(): void {
        console.log("Listando aplicativos instalados...");
    }
    
    public get versaoOS() : string {
        return this._versaoOS;
    }
    public set versaoOS(v : string) {
        this._versaoOS = v;
    }
    
    public get conexao5G() : boolean {
        return this._conexao5G;
    }
    public set conexao5G(v : boolean) {
        this._conexao5G = v;
    }
}