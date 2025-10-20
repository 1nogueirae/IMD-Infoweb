function diasNoMes() {
    let mes = getNumber("mes");
    let ano = new Date().getFullYear();

    let daysQntd = new Date(ano, mes+1, 0).getDate();

    console.log(daysQntd);

    giveValue(daysQntd, "saida");
}
