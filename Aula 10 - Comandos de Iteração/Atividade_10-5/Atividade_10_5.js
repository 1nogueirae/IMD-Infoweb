function primos() {
    let n = getNumber("numero");

    if (n <= 1 || isNaN(n)) {
        giveValue("Por favor, digite um número válido maior que 1.", "resultado");
    }
    
    let numerosPrimos = [];
    
    for (let i = 2; i <= n; i++) {
        let ehPrimo = true;
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            numerosPrimos.push(i);
        }
    }
    
    if (numerosPrimos.length > 0) {
        giveValue(`Os números primos de 2 a ${n} são: ${numerosPrimos.join(", ")}`, "resultado");
    } else {
        giveValue(`Não há números primos entre 2 e ${n}.`, "resultado");
    }
}

