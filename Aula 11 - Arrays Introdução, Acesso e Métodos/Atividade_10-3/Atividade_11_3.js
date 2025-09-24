var original = [];
var clone = [];

function inserir() {
    original.push(getNumber("entrada"))
    showResult();
}

function clonar() {
    clone = [...original];
    showResult();
}

function showResult() {
    let result = `Original: ${original} <br> Clone: ${clone}`;
    giveValue(result, "resultado");
}