function converter() {

    let minutes = getNumber("minutos");
    
    let hours = Math.floor(minutes / 60);
    let minutess = minutes % 60;

    giveValue(hours + "h" + minutess + "m", "saida")
}
