const unico = (array: any[]): any[] => {
    return array.filter((item, index) => array.indexOf(item) === index);
}

export class Playlist {
    constructor(public musicas: string[]) { }

    adicionarInicio(musica: string): void {
        this.musicas.unshift(musica);
        this.musicas = unico(this.musicas);
    }

    adicionarFim(musica: string): void {
        this.musicas.push(musica);
        this.musicas = unico(this.musicas);
    }

    descobrirPosicao(musica: string): number {
        return this.musicas.indexOf(musica);
    }

    excluirMusica(posicao: number): void {
        if (posicao >= 0 && posicao < this.musicas.length) {
            this.musicas.splice(posicao, 1);
        }
    }

    obterMusicas(): string[] {
        return this.musicas;
    }
}