var maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var minusculas = 'abcdefghijklmnopqrstuvwxyz';

function inverter() {
    var str = getString("entrada");
    var strInvertida = "";
    let resultado = ""
    if (str !== "") {
        for (let i = 0; i < str.length; i++) {

            if (minusculas.includes(str[i])) {
                strInvertida += str[i].toUpperCase();
            } else if (maiusculas.includes(str[i])) {
                strInvertida += str[i].toLowerCase();
            } else {
                strInvertida += str[i];
            }
        }
        resultado = strInvertida
    } else {
        resultado = `Insira sua frase para vê-la com as letras trocadas.`
    }



    giveValue(resultado, "resultado");
}