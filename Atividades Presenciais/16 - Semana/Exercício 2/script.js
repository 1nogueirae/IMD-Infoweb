const $containerAlbuns = $("#lista-albuns");
const $containerMusicas = $("#lista-musicas");

async function consumirApi_albuns() {
    const urlAlbums = "https://taylor-swift-api.sarbo.workers.dev/albums";

    try {
        const resposta = await fetch(urlAlbums);

        if (!resposta.ok) {
            throw new Error("Erro na resposta da API: " + resposta.status);
        }

        const albums = await resposta.json();

        return albums;

    } catch (error) {
        console.error("Erro ao buscar os álbuns:", error);
    }

};

async function consumirApi_musicas(albumID) {

    const url = `https://taylor-swift-api.sarbo.workers.dev/albums/${albumID}`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Erro na resposta da API: " + resposta.status);
        }

        const songs = await resposta.json();
        return songs;
    } catch (error) {
        console.error("Erro ao buscar as músicas:", error);
    }
}

async function drawAlbums() {
    const albums = await consumirApi_albuns();

    const $row = $('<div class="row g-3"></div>');

    albums.forEach(album => {
        const $col = $(`
            <div class="col-12 col-sm-6 col-md-4">
                <div class="card h-100">
                    <div class="card-body" data-id="${album.album_id}">
                        <h5 class="card-title">${album.title}</h5>
                        <p class="card-release-date mb-3">${album.release_date}</p>
                        <button type="button" class="btn btn-primary listar-musica w-100">Listar músicas</button>
                    </div>
                </div>
            </div>
        `);
        $row.append($col);
    });

    $containerAlbuns.empty().append($row);
}


async function drawSongs(albumID, albumTitle) {
    const dadosMusicas = await consumirApi_musicas(albumID);

    $containerMusicas.empty().append(`
        <h3 class="mb-2">Músicas do álbum: ${albumTitle}</h3>
        <ul class="list-group" id="tracks-list"></ul>
    `);

    const $list = $("#tracks-list");
    dadosMusicas.forEach((musica, index) => {
        $list.append(`
            <li class="list-group-item">${index + 1}. ${musica.title}</li>
        `);
    });
}
drawAlbums();

$containerAlbuns.on("click", ".listar-musica", function () {
    const albumId = $(this).closest('.card-body').data('id');
    const albumTitle = $(this).closest('.card-body').find('.card-title').text();
    drawSongs(albumId, albumTitle);
});