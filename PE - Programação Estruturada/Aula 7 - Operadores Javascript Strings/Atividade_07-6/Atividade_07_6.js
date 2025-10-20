function verificar_minuscula() {
    let string = getString("entrada").trim();
    let tORf = string === string.toLowerCase();

    giveValue(tORf, "saida");
}
