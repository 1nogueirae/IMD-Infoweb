import { Nome } from "./nome";
import { Nacionalidade } from "./nacionalidade";
import { DataNascimento } from "./dataNascimento";

export class Artista {

    private _nome: Nome;
    private _nacionalidade: Nacionalidade;
    private _dataNascimento: DataNascimento;

    constructor(nome?: Nome, nacionalidade?: Nacionalidade, dataNascimento?: DataNascimento) {
        this._nome = nome ?? new Nome();
        this._nacionalidade = nacionalidade ?? new Nacionalidade();
        this._dataNascimento = dataNascimento ?? new DataNascimento();
    }

    public get nome(): Nome {
        return this._nome;
    }
    public set nome(v: Nome) {
        this._nome = v;
    }


    public get nacionalidade(): Nacionalidade {
        return this._nacionalidade
    }
    public set nacionalidade(v: Nacionalidade) {
        this._nacionalidade = v;
    }


    public get dataNascimento(): DataNascimento {
        return this._dataNascimento
    }

    public exibirInformacoes(): void {
        this.nome.exibirInformacoes()
        this.dataNascimento.exibirInformacoes()
        this.nacionalidade.exibirInformacoes()
    }
}