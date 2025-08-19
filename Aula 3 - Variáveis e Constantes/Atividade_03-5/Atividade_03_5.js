"use strict"

var text = "Esse texto só está aparecendo, pois o Strict Mode do JS foi usado corretamente, ou seja, todas as variáveis estão sendo usadas na seguinte ordem:<br><br>1. Declaração.<br>2. Atribuição de valor.<br>3.Atribuição ao HTML."
document.getElementById("saida").innerHTML = text;
