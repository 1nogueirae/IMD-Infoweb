

function extremos() {

    numbers = [];

    for (let i = 0; i < 5; i++) {
        numbers.push(Number(document.getElementById("valor"+(i+1)).value));
    }

    console.log(numbers);

    var minimo = Math.min(...numbers);
    var maximo = Math.max(...numbers);

    document.getElementById("minimo").innerHTML = "Valor Mínimo é " + minimo;
    document.getElementById("maximo").innerHTML = "Valor Máximo é " + maximo;
}

