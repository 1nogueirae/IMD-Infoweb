function mes() {
    console.log("Função mes() chamada.");
    let meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    let mesAtual = new Date().getMonth();

    console.log(meses[mesAtual]);

    giveValue(meses[mesAtual], "resultado");
}
