function inverter() {
    var texto = getValue("texto");
    
    var textoInvertido = montarTexto(texto);
    setValue(textoInvertido, "resultado");
}

function montarTexto(frase) {
    var palavras = frase.split(" ");
    
    palavras = palavras.filter(function(palavra) {
        return palavra !== "";
    });
    
    var palavrasInvertidas = inverterArrayRecursivo(palavras);
    
    return palavrasInvertidas.join(" ");
}

function inverterArrayRecursivo(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    var ultimoElemento = arr[arr.length - 1];
    var restoDoArray = arr.slice(0, arr.length - 1);
    
    return [ultimoElemento].concat(inverterArrayRecursivo(restoDoArray));
}