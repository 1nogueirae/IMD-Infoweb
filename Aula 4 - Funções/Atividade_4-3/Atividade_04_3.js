/*
Complete o corpo da função positivo do arquivo Atividade_04_3.js, de forma que essa função escreva, no parágrafo de identificador “saída”, o valor "true", se os dois valores passados como entrada forem maiores que zero, ou "false", se pelo menos um dos dois valores passados como entrada for menor ou igual a zero. Você deverá fazer uso das funções ler_entrada, escrever_saida e maior, as quais também precisarão ter seus corpos definidos.

Passo-a-passo do programa:

1. Ao apertar o botão, ler os valores de entrada com a função "ler_entrada".
2. Verificar se os dois valores são positivos.
2.1 Se os dois forem positivos, retornar TRUE.
2.2 Se qualquer um dos dois for <= 0, retornar FALSE.
*/


function positivos() {
    let entrada1 = ler_entrada("entrada1")
    let entrada2 = ler_entrada("entrada2")

    escrever_saida("saida", maior(entrada1, 0) && maior(entrada2, 0))
}

function ler_entrada(campo) {
    return campo = Number(document.getElementById(campo).value)
}

function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor
}

function maior(valor, limiar) {
    if (valor > limiar) {
        return true
    }
    return false
}
