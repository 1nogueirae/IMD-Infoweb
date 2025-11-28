$(function () {
    const urlAlbums = "https://taylor-swift-api.sarbo.workers.dev/albums";

    $.get(urlAlbums, function (albums) {
        $.each(albums, function (_i, album) {
            const html = `
                        <div class="album-item">
                        <h3 class="album-title" data-id="${album.album_id}" style="cursor:pointer">${album.title}</h3>
                        <small>${album.release_date}</small>
                        <ul class="track-list" style="display:none"></ul>
                        </div>`;
            $('#discografia').append(html);
        });
    }).fail(function () {
        console.log(`Falha ao carregar álbuns`);
    });

    $('#discografia').on('click', 'h3.album-title', function () {
        const id = $(this).data('id');
        const $ul = $(this).siblings('ul.track-list');

        if ($ul.children().length) {
            $ul.slideToggle(150);
            return;
        }

        $ul.show().html(`<li>Carregando...</li>`);
        $.get(`https://taylor-swift-api.sarbo.workers.dev/albums/${id}`, function (data) {
            $ul.empty();
            const tracks = Array.isArray(data) ? data : (Array.isArray(data.tracks) ? data.tracks : []);
            if (!tracks.length) {
                $ul.append(`<li>Nenhuma música encontrada</li>`);
                return;
            }
            tracks.forEach(function (track, i) {
                const numero = i + 1;
                const titulo = track.title || '(sem título)';
                $ul.append(`<li>${numero}. ${titulo}</li>`);
            });
        }).fail(function () {
            $ul.html(`<li>Erro ao carregar músicas</li>`);
        });
    });
});

