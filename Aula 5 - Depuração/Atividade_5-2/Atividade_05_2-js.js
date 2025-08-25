function positivos() {
    var x = ler_entrada("entrada1");
    var y = ler_entrada("entrada2");

    var x_maior = maior(x, 1);
    var y_maior = maior(y, 1);

    // O operador lógico estava como "||", ao invés do correto "&&".
    var x_y_maior = x_maior && y_maior;

    escrever_saida("saida", x_y_maior);
}

function ler_entrada(campo) {
    return Number(document.getElementById(campo).value);
}

function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor;
}

function maior(valor, limiar) {
    // Anteriormente, a função estava comparando valor < limiar.
    return valor > limiar;
}
