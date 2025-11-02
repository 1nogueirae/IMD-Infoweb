function getValue(field) {
    return document.getElementById(field).value;
}

function giveValue(value, field) {
    document.getElementById(field).innerHTML = value;
}

function executeOption() {
    hideAllPiramidesLevels();

    const number = Number(getValue("numberInput"));
    const option = getValue("opcoes");

    switch (option) {
        case "negativo-positivo":
            isPositive(number);
            break;
        case "soma-zero":
            sumToZero(number);
            break;
        case "ddd":
            ddd(number);
            break;
        case "soma-digitos":
            sumDigits(number);
            break;
        case "piramide":
            piramide(number);
            break;
        case "":
            giveValue("Selecione uma opção válida.", "saida");
            break;
    }
}

function isPositive(number) {
    if (number === 0) {
        giveValue("O valor é zero", "saida");
    } else if (number > 0) {
        giveValue("O valor é positivo", "saida");
    } else {
        giveValue("O valor é negativo", "saida");
    }

    return (number > 0);
}

function sumToZero(number) {
    let sum = 0;

    if (isPositive(number)) {
        for (let i = 0; i < number; i++) {
            sum += i;
        }
    } else {
        let positiveNumber = number * -1;
        for (let i = 0; i < positiveNumber; i++) {
            sum += i;
        }
        sum = sum * -1;
    }

    giveValue("A soma de 0 a " + number + " é " + sum, "saida");
}

function ddd(code) {
    switch (code) {
        case 11:
            giveValue("São Paulo.", "saida");
            break;
        case 21:
            giveValue("Rio de Janeiro.", "saida");
            break;
        case 27:
            giveValue("Espírito Santo.", "saida");
            break;
        case 31:
            giveValue("Minas Gerais.", "saida");
            break;
        case 41:
            giveValue("Paraná.", "saida");
            break;
        case 47:
            giveValue("Santa Catarina.", "saida");
            break;
        case 51:
            giveValue("Rio Grande do Sul.", "saida");
            break;
        case 61:
            giveValue("Distrito Federal.", "saida");
            break;
        case 62:
            giveValue("Goiás.", "saida");
            break;
        case 63:
            giveValue("Tocantins.", "saida");
            break;
        case 65:
            giveValue("Mato Grosso.", "saida");
            break;
        case 67:
            giveValue("Mato Grosso do Sul.", "saida");
            break;
        case 68:
            giveValue("Acre.", "saida");
            break;
        case 69:
            giveValue("Rondônia.", "saida");
            break;
        case 71:
            giveValue("Bahia.", "saida");
            break;
        case 79:
            giveValue("Sergipe.", "saida");
            break;
        case 81:
            giveValue("Pernambuco.", "saida");
            break;
        case 82:
            giveValue("Alagoas.", "saida");
            break;
        case 83:
            giveValue("Paraíba.", "saida");
            break;
        case 84:
            giveValue("Rio Grande do Norte.", "saida");
            break;
        case 85:
            giveValue("Ceará.", "saida");
            break;
        case 86:
            giveValue("Piauí.", "saida");
            break;
        case 91:
            giveValue("Pará.", "saida");
            break;
        case 92:
            giveValue("Amazonas.", "saida");
            break;
        case 95:
            giveValue("Roraima.", "saida");
            break;
        case 96:
            giveValue("Amapá.", "saida");
            break;
        case 98:
            giveValue("Maranhão.", "saida");
            break;
        default:
            giveValue("DDD não cadastrado.", "saida");
            break;
    }
}

function sumDigits(number) {
    let sum = 0;

    let numToString = number.toString();

    for (let char of numToString) {
        sum += Number(char);
    }

    let imparPar = "";

    if (sum % 2 === 0) {
        imparPar = "par";
    } else {
        imparPar = "ímpar";
    }

    let digitos = numToString.split('');
    let digitosMessage = "";

    for (let char of digitos) {
        digitosMessage += char + "+";
    }

    digitosMessage = digitosMessage.slice(0, -1);

    let message = "A soma dos dígitos é " + imparPar + ": \"" + sum + "\". O valor \"" + sum + "\" representa a soma dos dígitos \"" + digitosMessage + "\".";

    giveValue(message, "saida");
}

function piramide(piramideLevel) {

    let allowedNumbers = [3, 4, 5];

    if (!allowedNumbers.includes(piramideLevel)) {
        let allowedNumbersString = allowedNumbers.join(", ");
        giveValue("Valor inválido. Informe um número dentre as seguintes opções: " + allowedNumbersString, "saida");
    } else {
        hideAllPiramidesLevels();

        switch (piramideLevel) {
            case 3:
                giveValue("Pirâmide de nível 3 exibida abaixo.", "saida");
                console.log("3");
                showPiramideLevel(1);
                showPiramideLevel(2);
                showPiramideLevel(3);
                hidePiramideLevel(4);
                hidePiramideLevel(5);
                break;
            case 4:
                giveValue("Pirâmide de nível 4 exibida abaixo.", "saida");
                console.log("4");
                showPiramideLevel(1);
                showPiramideLevel(2);
                showPiramideLevel(3);
                showPiramideLevel(4);
                hidePiramideLevel(5);
                break;
            case 5:
                giveValue("Pirâmide de nível 5 exibida abaixo.", "saida");
                console.log("5");
                showPiramideLevel(1);
                showPiramideLevel(2);
                showPiramideLevel(3);
                showPiramideLevel(4);
                showPiramideLevel(5);
                break;
        }
    }
}

function hideAllPiramidesLevels() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`level${i}`).style.display = "none";
    }
}

function hidePiramideLevel(level) {
    document.getElementById(`level${level}`).style.display = "none";
}

function showPiramideLevel(level) {
    document.getElementById(`level${level}`).style.display = "block";
}