function difDatas() {
    var data1 = getDateValue("data1");
    var data2 = getDateValue("data2");
    
    let msDif = data1.getTime() - data2.getTime();
    let daysDif = msDif / (1000 * 60 * 60 * 24)

    giveValue(
        "Diferença em milisegundos: " + msDif +
        "<br> Diferença em dias: " + daysDif
        , 
        "saida");
}
