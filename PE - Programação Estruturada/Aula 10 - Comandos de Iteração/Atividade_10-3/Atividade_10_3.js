function mdc() {
    let n1 = getNumber("A");
    let n2 = getNumber("B");

    if (n1 > 0 && n2 > 0) {
        let maior, menor;

        if (n1 >= n2) {
            maior = n1;
            menor = n2;
        } else {
            maior = n2;
            menor = n1;
        }

        let resto;
        let mdc;

        while (resto !== 0) {

            resto = maior % menor;
            maior = menor;
            menor = resto;
        }

        mdc = maior;

        giveValue(`O MDC entre ${n1} e ${n2} é ígual a ${mdc}`, "resultado");
    } else {
        giveValue("Ambos os números devem ser positivos.", "resultado")
    }



}

