function getInput(field){
    return Number(document.getElementById(field).value)
}

function giveOutput(field, value){
    document.getElementById(field).innerHTML = value
}

function calculateArea() {
    let base = getInput("base")
    let height = getInput("height")

    console.log(base)
    console.log(height)

    let area = (base * height) / 2
    
    giveOutput("area", "A área da figura é: " + area + "m²")

    return area
}

function convertResult() {
    let area = calculateArea()

    giveOutput("area", "A área da figura é: " + area*10.764.toFixed(2) + "pés²")
}