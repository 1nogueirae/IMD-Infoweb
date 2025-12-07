function potencia3(n) {
    return n ** 3;
}

function metade(n) {
    return n / 2;
}

function areaCirculo(r) {
    return Math.PI * r ** 2;
}


const resultadoDOM = document.getElementById("solucao");
const botaoPotencia = document.getElementById("potencia-button");
const botaoMetade = document.getElementById("metade-button");
const botaoArea = document.getElementById("area-button");


botaoPotencia.addEventListener("click", function () {
    const valor = Number(document.getElementById("potencia-input").value);
    const resultado = potencia3(valor);
    resultadoDOM.innerHTML = `O cubo de ${valor} é: ${resultado}`;
});

botaoMetade.addEventListener("click", function () {
    const valor = Number(document.getElementById("metade-input").value);
    const resultado = metade(valor);
    resultadoDOM.innerHTML = `A metade de ${valor} é: ${resultado}`;
});

botaoArea.addEventListener("click", function () {
    const valor = Number(document.getElementById("area-input").value);
    const resultado = areaCirculo(valor);
    resultadoDOM.innerHTML = `A área do círculo de raio ${valor} é: ${resultado.toFixed(2)}`;
});


document.addEventListener("keydown", function (event) {
    if (event.key === "p" || event.key === "P") {
        botaoPotencia.click();
    } else if (event.key === "m" || event.key === "M") {
        botaoMetade.click();
    } else if (event.key === "a" || event.key === "A") {
        botaoArea.click();
    }
});