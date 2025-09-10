function getNumber (field) {
    return Number(document.getElementById(field).value);
}

function getString (field){
    return document.getElementById(field).value;
}

function getDateValue (field) {
    return new Date(document.getElementById(field).value);
}

function giveValue (value, field){
    document.getElementById(field).innerHTML = value;
}

function fullActualDate(field) {
    let day = new Date().getDate();

    let month = new Date().getMonth() + 1;
    if (month <= 9){
        month = "0" + month;
    }

    let year = new Date().getFullYear();
    let actualDate = day + "/" + month + "/" + year;
    
    giveValue(actualDate, field);
}
