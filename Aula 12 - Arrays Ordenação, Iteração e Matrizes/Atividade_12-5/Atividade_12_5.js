var n = 0;
var m = 0;

function iniciar() {
    n = Number(document.getElementById("number_N").value);
    m = Number(document.getElementById("number_M").value);

    var resposta = "";
    if (n > 0 && m > 0) {
        var matriz = inserir();
        resposta = exibirMatriz(matriz);
    } else {
        resposta = "Favor inserir valores positivos para as dimensões N e M."
    }
    document.getElementById("resposta").innerHTML = resposta;
}

// Função para Inserir Matriz
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

// Função para Exibir Matriz
function exibirMatriz(matriz){
}

function exibirLinha(linha){
}

function exibirElemento(elemento){
}
