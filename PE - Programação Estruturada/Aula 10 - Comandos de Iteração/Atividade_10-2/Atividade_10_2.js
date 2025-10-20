let numeros = [];

function media() {
    clearField();
    
    let media = 0;

    let input = document.getElementById("userInput").value;

    if (input !== "") {
        numeros.push(Number(input));
    } else {
        if (numeros.length > 0) {
            for (let i = 0; i < numeros.length; i++) {
                media += numeros[i];
            }
            media = media / numeros.length;
            giveValue(`A média dos números é ${media.toFixed(2)}`, "resultado");
        } else {
            giveValue("Nenhum número foi digitado.", "resultado");
        }
    }
}

function clearField () {
    giveValue("", "resultado");
}


