function atualizarMensagem() {
    const nome = document.getElementById('nome').value;
    document.getElementById('mensagem').innerHTML = `Olá, ${nome}!`;
}

function horaAtual() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const min = agora.getMinutes().toString().padStart(2, '0');
    const seg = agora.getSeconds().toString().padStart(2, '0');
    document.getElementById("horaAtual").innerHTML = `${hora}:${min}:${seg}`;
}

function dataHoraFormatada() {
    const dataStr = new Date().toString();
    const partes = dataStr.split(' ');
    const dia = partes[2];
    const ano = partes[3];
    const meses = {
        Jan: "Jan", Feb: "Fev", Mar: "Mar", Apr: "Abr", May: "Mai", Jun: "Jun",
        Jul: "Jul", Aug: "Ago", Sep: "Set", Oct: "Out", Nov: "Nov", Dec: "Dez"
    };
    const mes = meses[partes[1]] || partes[1];
    const horaMin = partes[4].slice(0,5);
    const [h, m] = horaMin.split(':');
    const horaFormatada = `${h}h${m}`;
    const dataFormatada = `Data: ${dia} de ${mes} de ${ano}<br>Hora: ${horaFormatada}`;
    document.getElementById("horaEDataAtual").innerHTML = dataFormatada;
}


function calcularIdade() {
    const valorInput = document.getElementById("dataNascimento").value;
    if (!valorInput) {
        document.getElementById("saida2").innerHTML = "Informe a data de nascimento.";
        return;
    }
    const nascimento = new Date(valorInput);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    document.getElementById("saida2").innerHTML = `Idade: ${idade} anos`;
}

function atualizarMensagem() {
    const nome = document.getElementById('nome').value;
    const texto = `Olá ${nome}, seja bem-vindo(a)`;
    document.getElementById('mensagem').innerHTML = texto;
}