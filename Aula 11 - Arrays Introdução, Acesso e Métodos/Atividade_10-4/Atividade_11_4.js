var array = [];

function inserir() {
    array.push(getNumber("entrada"));
    imprimir();
}

function limpar() {
    array = [];
    imprimir();
}

function maximo() {
    let max;

    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            max = array[i];
        } else if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

function imprimir() {
    let resultado = `Array: [${array}] <br>`;

    if (array === undefined || array.length == 0) {
        resultado += `O array está vazio. Não temos valor máximo.`;

    } else {
        resultado += `O valor máximo do array é ${maximo()}`;
    }

    giveValue(resultado, "resultado");
}