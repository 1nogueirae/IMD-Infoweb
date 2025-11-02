import { Playlist } from "./playlist.js";

const playlist = new Playlist([]);

function tocarMusica(musica: string): void {
    const tocandoAgora = document.querySelector('.tocando-agora p') as HTMLParagraphElement;
    tocandoAgora.textContent = 'Tocando a música ' + musica;
    tocandoAgora.style.fontWeight = 'bold';
    tocandoAgora.style.color = '#28a745';
}

function atualizarPlaylist(): void {
    const tbody = document.getElementById('playlist-tbody') as HTMLTableSectionElement;
    tbody.innerHTML = '';

    const musicas = playlist.obterMusicas();

    if (musicas.length === 0) {
        const tr = document.createElement('tr');

        const tdNumero = document.createElement('td');
        tdNumero.textContent = '-';

        const tdNome = document.createElement('td');
        tdNome.textContent = '-';

        const tdAcoes = document.createElement('td');
        tdAcoes.textContent = '-';

        tr.appendChild(tdNumero);
        tr.appendChild(tdNome);
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
        return;
    }

    for (let i = 0; i < musicas.length; i++) {
        const tr = document.createElement('tr');

        const tdNumero = document.createElement('td');
        tdNumero.textContent = (i + 1).toString();

        const tdNome = document.createElement('td');
        tdNome.textContent = musicas[i];

        const tdAcoes = document.createElement('td');

        const btnTocar = document.createElement('button');
        btnTocar.textContent = '▶️';
        btnTocar.className = 'btn btn-success btn-sm me-2';
        btnTocar.onclick = function () {
            tocarMusica(musicas[i]);
        };

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = '🗑️';
        btnExcluir.className = 'btn btn-danger btn-sm';
        btnExcluir.onclick = function () {
            playlist.excluirMusica(i);
            atualizarPlaylist();
        };

        tdAcoes.appendChild(btnTocar);
        tdAcoes.appendChild(btnExcluir);

        tr.appendChild(tdNumero);
        tr.appendChild(tdNome);
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
    }
}

const form = document.getElementById('adicionar-musicas-form') as HTMLFormElement;

form.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    const musica = input.value.trim();

    if (musica === '') {
        return;
    }

    const radioInicio = document.getElementById('adicionar-inicio') as HTMLInputElement;
    const radioFim = document.getElementById('adicionar-fim') as HTMLInputElement;

    if (!radioInicio.checked && !radioFim.checked) {
        return;
    }

    if (radioInicio.checked) {
        playlist.adicionarInicio(musica);
    } else {
        playlist.adicionarFim(musica);
    }

    input.value = '';
    radioInicio.checked = false;
    radioFim.checked = false;

    atualizarPlaylist();
});

atualizarPlaylist();