function calcularArea(propriedade, formula) {
    return formula(propriedade);
}
function formulaCirculo(raio) {
    return Math.PI * raio * raio;
}

let raioCirculo = 10;

let areaDoCirculo = calcularArea(raioCirculo, formulaCirculo);

console.log("A área do Círculo é:", areaDoCirculo);

function formulaRetangulo(medidas) {
    return medidas.base * medidas.altura;
}

let medidasRetangulo = { base: 20, altura: 5 };

let areaDoRetangulo = calcularArea(medidasRetangulo, formulaRetangulo);

console.log("A área do Retângulo é:", areaDoRetangulo);