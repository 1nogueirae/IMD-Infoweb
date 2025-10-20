function aleatorio() {
    var min = parseInt(document.getElementById("minimo").value);
    var max = parseInt(document.getElementById("maximo").value);

    let random = randomInt(min, max);

    write(random, "saida");
}

function write(value, field){
    document.getElementById(field).innerHTML = value;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

