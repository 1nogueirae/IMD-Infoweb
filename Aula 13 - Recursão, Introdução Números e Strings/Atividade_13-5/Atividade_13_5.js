function exibir() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    
    var palavras = misturar(texto);
    for (var i = 0; i < palavras.length; i++) {
        resultado = resultado + palavras[i] + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function misturar(texto) {
}
