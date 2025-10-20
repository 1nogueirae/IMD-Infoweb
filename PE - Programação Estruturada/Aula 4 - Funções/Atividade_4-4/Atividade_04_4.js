function pitagoras() {

    let h = rNumberInput("hipotenusa")
    let c1 = rNumberInput("cateto1")
    let c2 = rNumberInput("cateto2")

    if (square(h) === square(c1) + square(c2)) {
        rOutput("saida", "É um triângulo retângulo")
    } else {
        rOutput("saida", "Não é um triângulo retângulo")
    }

    console.log(square(h))
    console.log(square(c1) + square(c2))    


}

function rNumberInput(x) {
    return Number(document.getElementById(x).value)
}

function rOutput(place, value) {
    document.getElementById(place).innerHTML = value
}

function square(x) {
    return x * x
}

