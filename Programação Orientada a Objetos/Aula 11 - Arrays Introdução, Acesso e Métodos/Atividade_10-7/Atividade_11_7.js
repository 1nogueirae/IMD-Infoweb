
var array1 = [];
var array2 = [];
var arraySoma = [];
exibir(); 5

function inserir(a) {

    if (a == 1) {
        array1.push(getNumber("entrada1"));
    } else {
        array2.push(getNumber("entrada2"));
    }

    exibir();
}

function somar() {

    arraySoma = [];
    let maiorArray = array1.length > array2.length ? array1 : array2;

    for (let i = 0; i < maiorArray.length; i++) {
        let valor1 = array1[i]
        let valor2 = array2[i]

        console.log(`valor1: ${valor1} - valor2: ${valor2}`)

        if (valor1 === undefined || valor2 === undefined) {
            arraySoma.push(maiorArray[i]);
        } else {
            arraySoma.push(array1[i] + array2[i]);
        }
        
    }


    exibir();
}

function exibir() {
    let resultado =
        `
    Array 1: [${array1}] <br>
    Array 2: [${array2}] <br>
    Soma: [${arraySoma}]
    `;

    giveValue(resultado, "resultado");
}


