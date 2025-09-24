var array = [];

function inserir() {
    array.push(getNumber("entrada"));
    console.log(array);
}

function remover() {
    let valueToRemove = getNumber("saida");

    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueToRemove) {
            array.splice(i, 1);
            i--;
        }
    }
    imprimir();
}

function imprimir() {
    let resultado = `Array: [${array}] <br>`;
    giveValue(resultado, "resultado");
}