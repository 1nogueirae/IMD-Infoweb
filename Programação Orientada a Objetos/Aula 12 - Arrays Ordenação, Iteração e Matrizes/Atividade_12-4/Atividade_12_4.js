var array = [2,4,3,7];
exibir();

function inserir() {
    var x = getNumber("entrada")
    array.push(x);
    exibir();
}

function limpar() {
    array = [];
    exibir();
}

function exibir(){
    var texto = `Array = [${array}] <br>`
    
    giveValue(texto, "array")
}

function encontrarSoma() {
    let n = getNumber("ordem");
    let resultado;
    let encontrou = false;

    for (let i = 0; i < array.length && !encontrou; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === n) {
                resultado = `Os elementos ${i} e ${j} somam ${n}`;
                encontrou = true;
                break;
            }
        }
    }

    if (!encontrou) {
        resultado = `Não existem dois elementos cuja soma seja ${n}`;
    }

    giveValue(resultado, "resultado");
}