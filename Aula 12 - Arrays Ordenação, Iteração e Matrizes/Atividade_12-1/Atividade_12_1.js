// Primeiramente, entenda o código já existente

var array = [];
var ordenado = [];
exibir();

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    ordenado.push(x);
    exibir();
    maior();
}

function limpar() {
    array = [];
    ordenado = [];
    exibir();
    maior();
}

function exibir(){
    var texto = "Array = [" + array + "] <br>";
    document.getElementById("array").innerHTML = texto;
}

function maior() {
    var resultado = "";
    var x = Number(document.getElementById("ordem").value);

    // Complete aqui

    exibir();
    document.getElementById("resultado").innerHTML = resultado;
}

function comparar(a, b){
    return a - b;
}