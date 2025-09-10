function exibirData() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    if (month <= 9){
        month = "0" + month;
    }
    let year = new Date().getFullYear();
    let actualDate = day + "/" + month + "/" + year;
    
    giveValue(actualDate, "saida");
}
