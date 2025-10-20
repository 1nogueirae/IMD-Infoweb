var array = [];
var soma = 0;
var produto = 1;

function inserir() {
    array.push(getNumber("entrada"));
    atualizar();
    
    giveValue(`
    Array: [${array}] <br>
    Soma: ${soma} <br>
    Produto: ${produto} <br>
    `, "resultado");
}

function atualizar() {
    soma = 0;
    produto = 1;
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
        produto = produto * array[i];
    }
}
