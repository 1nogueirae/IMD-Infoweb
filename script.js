function getNumber (field) {
    return Number(document.getElementById(field).value);
}

function getString (field){
    return document.getElementById(field).value;
}

function giveValue (value, field){
    document.getElementById(field).innerHTML = value;
}
