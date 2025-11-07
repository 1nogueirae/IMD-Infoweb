function exibirObj(obj, filtro) {
    let resultado = '';
    for (let propiedade in obj) {
        if (!(filtro.includes(propiedade))) {
            resultado += `${propiedade}: ${obj[propiedade]}\n`;
        }
    }
    return resultado
}

const pessoa = {
    nome: 'Emanuel',
    idade: 21,
    cidade: 'Natal',
    profissao: 'Auxiliar de TI',
};

const filtro = ["cidade", "profissao"];

console.log("Printando com filtro:")
console.log(exibirObj(pessoa, filtro));

function arrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let propiedade = arr[i][0];
        let valor = arr[i][1];
        obj[propiedade] = valor;
    }
    return obj;
}

const entries = [['nome', 'Emanuel'], ['idade', 21], ['cidade', 'natal'], ['profissao', 'Auxiliar de TI']];
const obj = arrayToObject(entries);
console.log("Array para objeto:")
console.log(obj)

function arrayOfObjects(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arrayToObject(arr[i]);
        resultado.push(obj);
    }
    return resultado;
}

const dados = [
    [['nome', 'João'], ['idade', 25]],
    [['nome', 'Maria'], ['idade', 30]],
    [['nome', 'Pedro'], ['idade', 22]]
];

console.log("Array de objetos:");
console.log(arrayOfObjects(dados));