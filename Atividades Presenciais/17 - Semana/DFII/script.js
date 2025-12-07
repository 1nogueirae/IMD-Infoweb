const imagesUrls = {
    "1989": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Taylor_Swift_-_1989.png/250px-Taylor_Swift_-_1989.png",
    "Midnights": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Midnights_-_Taylor_Swift.png/250px-Midnights_-_Taylor_Swift.png",
    "The Tortured Poets Department": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png/250px-Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png",
    "The Life of a Showgirl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Taylor_Swift_%E2%80%93_The_Life_of_a_Showgirl_%28album_cover%29.png/250px-Taylor_Swift_%E2%80%93_The_Life_of_a_Showgirl_%28album_cover%29.png",
    "Taylor Swift": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Taylor_Swift_-_Taylor_Swift.png/250px-Taylor_Swift_-_Taylor_Swift.png",
    "Fearless": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Taylor_Swift_-_Fearless.png/250px-Taylor_Swift_-_Fearless.png",
    "Speak Now": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Taylor_Swift_-_Speak_Now_cover.png/250px-Taylor_Swift_-_Speak_Now_cover.png",
    "Red": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Taylor_Swift_-_Red.png/250px-Taylor_Swift_-_Red.png",
    "Reputation": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Taylor_Swift_-_Reputation.png/250px-Taylor_Swift_-_Reputation.png",
    "Lover": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Taylor_Swift_-_Lover.png/250px-Taylor_Swift_-_Lover.png",
    "Folklore": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Taylor_Swift_-_Folklore.png/250px-Taylor_Swift_-_Folklore.png",
    "Evermore": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Taylor_Swift_-_Evermore.png/250px-Taylor_Swift_-_Evermore.png"
}

let albums;

const videos = [
    "https://www.youtube.com/watch?v=-CmadmM5cOk"
];

function getYoutubeVideoId(url) {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function generateThumbnail(videoUrl) {
    const videoId = getYoutubeVideoId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function loadVideoThumbnails() {
    let videosContainer = $("<div class='row mt-5'></div>");

    videos.forEach((videoUrl, index) => {
        let thumbnailUrl = generateThumbnail(videoUrl);

        let videoCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${thumbnailUrl}" class="card-img-top video-thumbnail" alt="Video ${index + 1}" style="cursor: pointer; transition: opacity 0.3s ease;">
                    <div class="card-body">
                        <a href="${videoUrl}" target="_blank" class="btn btn-primary btn-sm">Assistir</a>
                    </div>
                </div>
            </div>
        `;

        videosContainer.append(videoCard);
    });

    $(".yotube-video .container").append(videosContainer);

    $(".video-thumbnail").mouseenter(function () {
        $(this).css("opacity", "0.7");
    }).mouseleave(function () {
        $(this).css("opacity", "1");
    });
}

async function getAllAlbuns() {
    let url = "https://taylor-swift-api.sarbo.workers.dev/albums";

    return $.ajax({
        url: url,
        type: "GET",
        dataType: "json"
    });
}

async function getAlbumSongs(albumId) {
    let url = `https://taylor-swift-api.sarbo.workers.dev/albums/${albumId}`

    return $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
    })
}

async function listSongs(albumTitle, albumId) {
    let songs = await getAlbumSongs(albumId);

    $("#h-songs-container").text(`Lista de Músicas do ${albumTitle}`);

    let songsDiv = $("#list-group");
    songsDiv.empty();

    for (let i = 0; i < songs.length; i++) {
        songsDiv.append(`<li class="list-group-item">${i + 1}. ${songs[i].title}<button class="btn btn-secondary" onclick="toggleLyrics(${songs[i].song_id})">Letra</button></li>`);
    }

    $("#songs-container").show(2000);
}

async function getLyrics(song_id) {
    let url = `https://taylor-swift-api.sarbo.workers.dev/lyrics/${song_id}`;

    return $.ajax({
        url: url,
        type: "GET",
        dataType: "json"
    });
}

async function toggleAlbums() {
    if (!albums) {
        albums = await getAllAlbuns();
        loadAlbums();
    }

    if ($("#albums-container").is(':visible')) {
        $("#albums-container").hide(2000);
    } else {
        $("#albums-container").show(2000);
    }
}

function loadAlbums() {
    let albumsDiv = $("#albums-container");
    let row = null;

    for (let i = 0; i < albums.length; i++) {
        let imageUrl = imagesUrls[albums[i].title];
        let album = albums[i];

        if (i % 3 === 0) {
            row = $('<div class="row"></div>');
            albumsDiv.append(row);
        }

        let albumCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <img src="${imageUrl}" alt="${album.title} Cover" class="img-fluid mb-3 album-img" style="cursor: pointer;">
                        <h5 class="card-title">${album.title}</h5>
                        <p class="card-text">Lançamento: ${album.release_date}</p>
                        <button class="btn btn-primary" onclick="listSongs('${album.title}', ${album.album_id})">Listar Músicas</button>
                    </div>
                </div>
            </div>
        `;

        row.append(albumCard);
    }

    $(".album-img").mouseenter(function () {
        $(this).css("transform", "scale(1.1)");
    }).mouseleave(function () {
        $(this).css("transform", "scale(1)");
    });
}

function toggleLyrics(songId) {
    getLyrics(songId).then(lyrics => {
        let lyricsDiv = $("#lyrics-container");
        lyricsDiv.empty();

        if (lyrics && lyrics.lyrics) {
            lyricsDiv.append(`
                <div class="card">
                    <div class="card-header">
                        <h5>${lyrics.song_title}</h5>
                    </div>
                    <div class="card-body">
                        <p style="white-space: pre-wrap;">${lyrics.lyrics}</p>
                    </div>
                </div>`);
        } else {
            lyricsDiv.append("<p>Letra não encontrada.</p>");
        }

        $("#lyrics-container").show(2000);
    });
}

$(document).ready(function () {
    $("#albums-container").hide();
    $("#songs-container").hide();
    $("#lyrics-container").hide();

    loadVideoThumbnails();
})