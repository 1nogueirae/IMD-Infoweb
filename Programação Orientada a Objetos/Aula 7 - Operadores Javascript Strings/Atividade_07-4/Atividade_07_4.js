function maiuscula() {
    let texto = getString("entrada").trim();
    texto = (texto.slice(0, 1)).toUpperCase() + (texto.slice(1).toLowerCase());
    giveValue (texto, "saida");
}
