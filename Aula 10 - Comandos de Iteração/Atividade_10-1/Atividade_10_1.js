function processar() {
    let n = getNumber("entrada");

    let saida = "";

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            saida += `O número ${i} é par.<br>`;
        } else {
            saida += `O número ${i} é ímpar.<br>`;
        }
    }

    console.log(saida);
    giveValue(saida, "resultado");
}    