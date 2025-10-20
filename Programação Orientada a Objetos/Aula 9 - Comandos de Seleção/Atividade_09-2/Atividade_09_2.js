function triangulo() {
    let pedaco1 = getNumber("valor1");
    let pedaco2 = getNumber("valor2");
    let pedaco3 = getNumber("valor3");

    if (pedaco1 < pedaco2 + pedaco3 && pedaco2 < pedaco1 + pedaco3 && pedaco3 < pedaco1 + pedaco2) {
        giveValue("Os lados formam um triângulo.", "saida");
    } else {
        giveValue("Os lados não formam um triângulo.", "saida");
    }
}    
