var videos =
    '{ "mais vistos": [' +
    '{ "youtubeId": "hT_nvWrelhg", "title": "Counting Stars" },' +
    '{ "youtubeId": "YQHsXMglC9A", "title": "Hello" },' +
    '{ "youtubeId": "09R8_2nJtjg", "title": "Sugar" },' +
    '{ "youtubeId": "pRpeEdMmmQ0", "title": "Waka Waka" } ]}';

const videosObj = JSON.parse(videos);

const divPrincipal = document.getElementById("principal");

videosObj["mais vistos"].forEach(function (video) {
    const link = document.createElement("a");

    link.href = `https://www.youtube.com/watch?v=${video.youtubeId}`;

    link.className = "list-group-item list-group-item-action";

    link.textContent = video.title;

    divPrincipal.appendChild(link);
});