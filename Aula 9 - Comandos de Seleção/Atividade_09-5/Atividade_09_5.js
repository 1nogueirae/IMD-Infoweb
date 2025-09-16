function calcular() {
    let operacao = getString("operacao");

    let n1 = getNumber("valor1");
    let n2 = getNumber("valor2");

    let resultado;

    switch (operacao) {
        case "soma":
            resultado = n1 + n2;
            break;
        case "subtracao":
            resultado = n1 - n2;
            break;
        case "multiplicacao":
            resultado = n1 * n2;
            break;
        case "divisao":
            resultado = n1 / n2;
            break;
    }

    giveValue("O resultado da sua operação é: " + resultado, "saida");

}
