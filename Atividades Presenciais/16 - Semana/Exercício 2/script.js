async function consumirApi() {
    const urlAlbums = "https://taylor-swift-api.sarbo.workers.dev/albums";

    try {
        const resposta = await fetch(urlAlbums);

        if (!resposta.ok) {
            throw new Error("Erro na resposta da API: " + resposta.status);
        }

        const dados = await resposta.json();
        return dados;

    } catch (error) {
        console.error("Erro ao buscar os álbuns:", error);
    }

};

function drawCards() {
    $(async () => {
        const albums = await consumirApi();
        if (!Array.isArray(albums)) return;

        const $container = $("#discografia");

        albums.forEach(album => {
            const $card = $(`
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 placeholder-img">
                            <img src="..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${album.title}</h5>
                                <p class="card-release-date">${formatDate(album.release_date)}</p> 
                                <button type="button" class="btn btn-primary">Listar músicas</button>   
                            </div>
                        </div>
                    </div>
                </div>
            `);
            $container.append($card);
        });
    });
}

drawCards();

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', options);
}
