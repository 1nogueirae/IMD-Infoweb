var meses = [ 
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

function filtrar() {
    let letra = getString("entrada").toLowerCase();
    let mesesFiltrados = [];

    if (letra === "") {
        giveValue("Por favor, digite uma letra.", "resultado");
        return;
    }

    meses.forEach((mes) => {
        if (mes.toLowerCase().includes(letra)) {
            mesesFiltrados.push(mes);
        }
    });

    if (mesesFiltrados.length > 0) {
        giveValue(`Meses que contêm a letra "${letra}": ${mesesFiltrados.join(", ")}`, "resultado");
    } else {
        giveValue(`Nenhum mês contém a letra "${letra}".`, "resultado");
    }
}
