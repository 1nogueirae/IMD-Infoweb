function recomendar() {
    let nota = getNumber("nota")
    let saida = "";
    switch (nota) {
        case 0, 1, 2: saida = "Você precisa melhorar muito!"; break;
        case 3, 4: saida = "Você está quase conseguindo!"; break;
        case 5, 6: saida = "Você conseguiu, mas poderia ser melhor!"; break;
        case 7, 8, 9: saida = "Você conseguiu!"; break;
        case 10: saida = "Você conseguiu com perfeição!"; break;
    }

    giveValue(saida, "saida")
}    
