function analisar() {
    let n1 = getNumber("valor1");
    let n2 = getNumber("valor2");
    let n3 = getNumber("valor3");

    let maior;

    if (n1 >= n2 && n1 >= n3) {
        maior = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        maior = n2;
    } else {
        maior = n3;
    }

    let soma = n1 + n2 + n3;

    let paridade = (soma % 2 === 0)

    if (paridade) {
        giveValue("O maior valor é " + maior + " e a soma dos três valores é par.", "saida");
    } else {
        giveValue("O maior valor é " + maior + " e a soma dos três valores é ímpar.", "saida");
    }
}
