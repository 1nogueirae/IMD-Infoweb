function mais_velho() {
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data2").value);

    var resultado;

    data1_ms = data1.getTime();
    data2_ms = data2.getTime();

    if (data1_ms < data2_ms) {
        resultado = "A pessoa A é mais velha";
    } else if (data1_ms > data2_ms) {
        resultado = "A pessoa B é mais velha";
    } else {
        resultado = "As pessoas A e B têm a mesma idade";
    }

    document.getElementById("saida").innerHTML = resultado;
}
