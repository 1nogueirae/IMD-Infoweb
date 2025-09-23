var original = [];

function inserir() {
    if (original.length != 0) {
        original += ", " + getNumber("entrada");
        imprimir();
    } else {
        original.push(getNumber("entrada"));
        imprimir();
    }
}

function imprimir() {
    giveValue(original, "resultado");
}
