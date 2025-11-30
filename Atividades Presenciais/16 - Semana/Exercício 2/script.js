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
    let albums = await consumirApi_albuns();

    albums.forEach(album => {
        $containerAlbuns.append(`
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body" data-id="${album.album_id}">
                            <h5 class="card-title">${album.title}</h5>
                            <p class="card-release-date">${album.release_date}</p>
                            <button type="button" class="btn btn-primary listar-musica">Listar músicas</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}


async function drawSongs(albumID, albumTitle) {
    console.log(`Desenhando músicas do álbum ${albumID}`);

    let dadosMusicas = await consumirApi_musicas(albumID);

    console.log(dadosMusicas);

    $containerMusicas.empty();
    $containerMusicas.append(`<h3>Músicas do álbum: ${albumTitle}</h3>`);
    dadosMusicas.forEach((musica, index) => {
        $containerMusicas.append(`<li>
            <span>${index + 1} - ${musica.title}</span>
            </li>`);
    });

}

drawAlbums();

$containerAlbuns.on("click", ".listar-musica", function () {
    const albumId = $(this).closest('.card-body').data('id');
    const albumTitle = $(this).closest('.card-body').find('.card-title').text();
    drawSongs(albumId, albumTitle);
});