var array = [];
exibir();

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    exibir();
}

function limpar() {
    array = [];
    ordenado = [];
    exibir();
}

function exibir(){
    var texto = "Array = [" + array + "] <br>";
    document.getElementById("array").innerHTML = texto;
}

function encontrarSoma() {
}