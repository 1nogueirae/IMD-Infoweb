function decimal() {
    var valor = Number(document.getElementById("valor").value);
    var decimais = Number(document.getElementById("decimais").value);

    var resultado = valor.toFixed(decimais);

    document.getElementById("saida").innerHTML = resultado;
}

