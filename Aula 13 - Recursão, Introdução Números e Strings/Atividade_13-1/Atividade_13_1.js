function sequenciaFib() {
    var n = Number(document.getElementById("numero").value);
    var resultado = "";

    document.getElementById("resultado").innerHTML = resultado;
    
}

function fibonacci(n) {
    var retorno = "";

    if (n < 0) {
        retorno = "ERRO";

    // CASO BASE
    } else if (n == 0) {
        retorno = 0;

    // CASO BASE
    } else if (n == 1) {
        retorno = 1;

    // RECURSÃO (n > 0)
    } else {
        retorno = fibonacci(n-2) + fibonacci(n-1);
    }

    return retorno;
}
