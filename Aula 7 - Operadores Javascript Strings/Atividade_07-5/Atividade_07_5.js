function inserir() {
    let texto = getString("entrada").trim();
    let inserir = getString("insercao");
    let pos = getNumber("posicao");
    let result = texto.slice(0, pos) + inserir + texto.slice(pos)

    giveValue(result, "saida");
}
