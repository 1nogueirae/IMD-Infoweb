export class Livro {
    constructor(_titulo, _autor, _editora, _ano) {
        this._titulo = _titulo;
        this._autor = _autor;
        this._editora = _editora;
        this._ano = _ano;
    }
    get titulo() {
        return this._titulo;
    }
    get autor() {
        return this._autor;
    }
    get editora() {
        return this._editora;
    }
    get ano() {
        return this._ano;
    }
}
