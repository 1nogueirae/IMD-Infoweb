var n = 0;
var m = 0;

function iniciar() {
    n = getNumber("number_N");
    m = getNumber("number_M");

    var resposta = "";
    if (n > 0 && m > 0) {
        var matriz = inserir();
        resposta = exibirMatriz(matriz);
    } else {
        resposta = "Favor inserir valores positivos para as dimensões N e M."
    }
    giveValue(resposta, "resposta");
}

function inserir() {
    var matriz = [];
    for (var i = 0; i < n; i++) {
        var linha = [];
        for (var j = 0; j < m; j++) {
            do {
                num_str = prompt("Digite o elemento " + i + " x " + j + ":");
                num = Number(num_str);
                if (!invalido(num)) {
                    linha.push(num);
                } else {
                    alert("Valores devem ser números entre -999 e 1000")
                }
            } while (invalido(num));
        }
        matriz.push(linha);
    }
    return matriz;
}

function invalido(num) {
    return isNaN(num) || num < -999 || num > 1000;
}

function exibirMatriz(matriz) {
    var resultado = "";
    
    for (var i = 0; i < matriz.length; i++) {
        resultado += exibirLinha(matriz[i]);
        resultado += "<br>";
    }
    
    return resultado;
}

function exibirLinha(linha) {
    var linhaFormatada = "";
    
    for (var j = 0; j < linha.length; j++) {
        linhaFormatada += exibirElemento(linha[j]);
    }
    
    return linhaFormatada;
}

function exibirElemento(elemento) {
    var elementoStr = elemento.toString();
    
    while (elementoStr.length < 5) {
        elementoStr += " ";
    }
    
    return elementoStr;
}
