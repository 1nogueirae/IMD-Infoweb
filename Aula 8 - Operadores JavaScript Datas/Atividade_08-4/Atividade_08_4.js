function fds() {
    let date = getDateValue("data");

    giveValue((date.getDay() === 5 || date.getDay() === 6), "saida");

}
