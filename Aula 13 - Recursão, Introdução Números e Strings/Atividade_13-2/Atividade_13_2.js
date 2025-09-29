function palindromo() {
    var texto = document.getElementById("texto").value;
    var resultado = "";

    if (texto === reverseString(texto)) {
        resultado = "É palíndromo!";
    } else {
        resultado = "Não é palíndromo!";
    }   
    
    setValue(resultado, "resultado");
}

function reverseString(str) {
    var retorno;

    // CASO BASE: a string está vazia
    if (str === "") {
        retorno = "";
        // RECURSÃO: pega o resto da string (s.substr(1)), inverte, e adiciona o primeiro caractere (s[0]) no final
    } else {
        retorno = reverseString(str.substr(1)) + str[0];
    }

    return retorno;

}