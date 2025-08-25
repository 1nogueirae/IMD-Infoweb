"use strict";

const texto = "Esta é a linha ";
var count = 1;

var textoFinal = texto + count + "<br>";
count++;
// Estava faltando um caracter de "+" na linha abaixo, ela estava assim:
// textoFinal = textoFinal texto + count + "<br>";
textoFinal = textoFinal + texto + count + "<br>";
count++;
textoFinal = textoFinal + texto + count + "<br>";
count++;
textoFinal = textoFinal + texto + count + "<br>";
count;
textoFinal = textoFinal + texto + count + "<br>";

document.getElementById("saida").innerHTML = textoFinal;
