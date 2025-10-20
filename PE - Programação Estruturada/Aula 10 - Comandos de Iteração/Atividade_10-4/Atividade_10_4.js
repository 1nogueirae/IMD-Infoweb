function calcular() {
    let n = getNumber("N");

    if (n > 0) {
        let soma = 0;

        for (let i = 1; i < n; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                soma += i
            }

        }

        giveValue(`A soma dos múltiplos de 3 e 5 menores do que ${n} é igual a ${soma}.`, "resultado")

    } else {
        giveValue("Insira um número positivo.", "resultado");
    }



}

