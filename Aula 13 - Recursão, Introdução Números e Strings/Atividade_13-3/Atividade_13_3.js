function exibir() {
    var n = Number(getValue("numero_1"));
    var m = Number(getValue("numero_2"));

    if (n > 0 && m > 0) {
        resultado = "O MDC é " + mdc(n, m);
    } else {
        resultado = "Insira números maiores que zero.";
    }

    setValue(resultado, "resultado");
}

function mdc(a, b) {
    if (b === 0) {
        return a;
    } else {
        return mdc(b, a % b);
    }
}
