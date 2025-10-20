function sequenciaFib() {
    let n = Number(getValue("numero"));

    // let fibo = fibonacci(n);
    let fibo = fibonacciIterativo(n);

    var resultado = `A sequência de Fibonacci de ${n} é: ${fibo}`;

    setValue(resultado, "resultado");
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

function fibonacciIterativo(n) {
    let a = 0, b = 1, temp;
    if (n < 0) {
        return "ERRO";
    } else if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}