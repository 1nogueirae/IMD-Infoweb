function executarExercicio() {
    var texto = document.getElementById('inputTexto').value;
    var caractere = document.getElementById('inputCaracter').value;

    if (!texto || texto.trim() === '') {
        document.getElementById('resultado').innerHTML = '<span style="color: red;">⚠️ Por favor, insira um texto para análise.</span>';
        return;
    }

    if (!caractere || caractere.trim() === '') {
        document.getElementById('resultado').innerHTML = '<span style="color: red;">⚠️ Por favor, informe o caractere que deseja procurar.</span>';
        return;
    }

    var cont = contarOcorrencias(texto, caractere);

    if (cont == 0) {
        var r = `O caractere <b>${caractere}</b> não aparece no texto informado.`;
    } else if (cont == 1) {
        var r = `O caractere <b>${caractere}</b> aparece <b>${cont} vez</b> no texto informado.`;
    } else {
        var r = `O caractere <b>${caractere}</b> aparece <b>${cont} vezes</b> no texto informado.`;
    }

    document.getElementById('resultado').innerHTML = r;
}

function contarOcorrencias(texto, caractere) {
    if (!caractere) return 0;

    function rec(t, c) {
        if (t.length < c.length) return 0;
        if (t.substring(0, c.length) === c) {
            return 1 + rec(t.slice(1), c);
        }
        return rec(t.slice(1), c);
    }

    return rec(texto, caractere);
}