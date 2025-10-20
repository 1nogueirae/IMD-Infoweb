var array = [];
var ordenado = [];
exibir();

function inserir() {
    var x = getNumber("entrada");
    array.push(x);
    ordenado.push(x);
    ordenado.sort((a, b) => a - b);
    exibir();
}

function limpar() {
    array = [];
    ordenado = [];
    exibir();
    giveValue("", "resultado");
}

function exibir() {
    var texto = `Array = [${array}]<br>`
    giveValue(texto, "array")
}

function maior() {
    var resultado = "";
    var x = getNumber("ordem");

    resultado = ordenado[x-1];

    exibir();
    giveValue(resultado, "resultado")
}