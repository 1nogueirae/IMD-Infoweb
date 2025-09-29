function calcular() {
    var n = Number(document.getElementById("numero_1").value);
    var m = Number(document.getElementById("numero_2").value);

    var resultado = (n + "**") + m + " = " + power(n,m);

    document.getElementById("resultado").innerHTML = resultado;
}

function power(a,b) {
}
