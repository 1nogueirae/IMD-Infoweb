function readNumber(field) {
    return Number(document.getElementById(field).value);
}

function writeNumber(value, field) {
    document.getElementById(field).innerHTML = value;
}

function executeArithmeticAverage() {
    var a = readNumber('a1');
    var b = readNumber('a2');

    writeNumber(calculateAverage(a, b), "arithmeticAverageResult");
}

function executeWeightedAverage() {
    var a = readNumber('b1');;
    var b = readNumber('b2');
    var c = readNumber('b3');

    writeNumber(calculateWeightedAverage(a, b, c), "weightedAverageResult");    
}

function executeExtremes(){
    var a = readNumber('c1');
    var b = readNumber('c2');
    var c = readNumber('c3');
    var d = readNumber('c4');

    writeNumber(calculateExtremes(a, b, c, d), "extremesResult");


}

function calculateAverage(n1, n2) {
    return "A média entre os números " + n1 + " e " + n2 + " é " + ((n1 + n2) / 2).toFixed(2);
}

function calculateWeightedAverage(n1, n2, n3) {
    r = ((n1 * 4) + (n2 * 5) + (n3 * 6)) / 15;

    return "A média ponderada (4, 5 e 6) entre os números " + n1 + ", " + n2 + " e " + n3 + " é " + Math.ceil(r)
}

function calculateExtremes(n1, n2, n3, n4){
    var max = Math.max(n1, n2, n3, n4);
    var min = Math.min(n1, n2, n3, n4);

    return "O maior número é: " + max + "<br>O menor número é: " + min


}