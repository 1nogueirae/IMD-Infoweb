const unico = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
};
export class Playlist {
    constructor(musicas) {
        this.musicas = musicas;
    }
    adicionarInicio(musica) {
        this.musicas.unshift(musica);
        this.musicas = unico(this.musicas);
    }
    adicionarFim(musica) {
        this.musicas.push(musica);
        this.musicas = unico(this.musicas);
    }
    descobrirPosicao(musica) {
        return this.musicas.indexOf(musica);
    }
    excluirMusica(posicao) {
        if (posicao >= 0 && posicao < this.musicas.length) {
            this.musicas.splice(posicao, 1);
        }
    }
    obterMusicas() {
        return this.musicas;
    }
}
