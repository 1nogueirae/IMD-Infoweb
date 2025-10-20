function exibir() {
    var texto = getString("texto");
    var resultado = "";
    
    var palavras = misturar(texto);
    for (var i = 0; i < palavras.length; i++) {
        resultado = resultado + palavras[i] + "<br>";
    }

    giveValue(resultado, "resultado");
}

function misturar(texto) {
    if (texto.length <= 1) {
        return [texto];
    }
    
    var permutacoes = [];
    
    for (var i = 0; i < texto.length; i++) {
        var caractereAtual = texto[i];
        var restanteTexto = texto.slice(0, i) + texto.slice(i + 1);
        
        var permutacoesRestantes = misturar(restanteTexto);
        
        for (var j = 0; j < permutacoesRestantes.length; j++) {
            permutacoes.push(caractereAtual + permutacoesRestantes[j]);
        }
    }
    
    return permutacoes;
}
