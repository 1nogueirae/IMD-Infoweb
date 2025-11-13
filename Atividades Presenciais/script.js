function listarSemanas() {

    const semanasContainer = document.getElementById("semanas-container");
    semanasContainer.innerHTML = "";

    const semanas = [
        "Semana 1",
        "Semana 2",
        "Semana 3",
        "Semana 4",
        "Semana 5",
        "Semana 6",
        "Semana 7",
        "Semana 8",
        "Semana 9",
        "Semana 10",
        "Semana 11",
        "Semana 12",
        "Semana 13",
    ];

    semanas.forEach((index) => {
        semanasContainer.innerHTML += `
            Semana ${index + 1}: <a href="semana${index + 1}/index.html">Atividades</a><br> 
        `;
    });

}