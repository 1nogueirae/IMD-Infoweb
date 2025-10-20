var n = 0;
var m = 0;

function iniciar() {
    n = getNumber("number_N");
    m = getNumber("number_M");

    var resposta = "";
    if (n > 0 && m > 0) {
        var matriz1 = inserir();
        var matriz2 = inserir();
        var soma = somar(matriz1, matriz2);

        resposta = exibirMatriz(matriz1);
        resposta = resposta + "<br> + <br>";
        resposta = resposta + exibirMatriz(matriz2);
        resposta = resposta + "<br> = <br>";
        resposta = resposta + exibirMatriz(soma);
    } else {
        resposta = "Favor inserir valores positivos para as dimensões N e M."
    }
    giveValue(resposta, "resposta");
}

function somar(matriz1, matriz2){
    var matrizSoma = [];
    
    for (var i = 0; i < matriz1.length; i++) {
        var linhaSoma = [];
        
        for (var j = 0; j < matriz1[i].length; j++) {
            // Si,j = Ai,j + Bi,j
            var elementoSoma = matriz1[i][j] + matriz2[i][j];
            linhaSoma.push(elementoSoma);
        }
        
        matrizSoma.push(linhaSoma);
    }
    
    return matrizSoma;
}

function inserir() {
    var matriz = [];
    for (var i = 0; i < n; i++) {
        var linha = [];
        for (var j = 0; j < m; j++) {
            do {
                num_str = prompt("Digite o elemento "+i+" x "+j+":");
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

function invalido(num){
    return isNaN(num) || num < -999 || num > 1000;
}

function exibirMatriz(matriz){
    var resposta = "[<br>";
    for (var i = 0; i < matriz.length; i++) {
        resposta = resposta + exibirLinha(matriz[i]);
        if (i + 1 < matriz.length) {
            resposta = resposta + ", <br>";
        }
    }
    resposta = resposta + "<br>]";
    return resposta;
}

function exibirLinha(linha){
    var resposta = "[";
    for (var i = 0; i < linha.length; i++) {
        resposta = resposta + exibirElemento(linha[i]);
        if (i + 1 < linha.length) {
            resposta = resposta +",";
        }
    }
    resposta = resposta + "]";
    return resposta;
}

function exibirElemento(elemento){
    var tam = elemento.toString().length;
    var brancos = 5 - tam;
    var resposta = "";
    for(var i=0; i < brancos; i++) {
        resposta = resposta + " ";
    }
    resposta = resposta + elemento;
    return resposta;
}
