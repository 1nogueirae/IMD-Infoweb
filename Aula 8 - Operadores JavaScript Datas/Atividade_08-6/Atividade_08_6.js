function idade() {
    var hoje = new Date();
    var nascimento = new Date(document.getElementById("data").value);
    
    var idade_ms = hoje.getTime() - nascimento.getTime();
    var idade = new Date(idade_ms); 
  
    var idade_ano = Math.abs(idade.getUTCFullYear() - 1970);
    
    var resposta = idade_ano + " anos";

    document.getElementById("saida").innerHTML = resposta;
}
