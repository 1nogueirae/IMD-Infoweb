function truncar() {
    let text = getString("texto");
    let text_lenght = getNumber("quantidade");

    giveValue(text.slice(0, text_lenght), "saida");
}
