var StatusEnvio;
(function (StatusEnvio) {
    StatusEnvio[StatusEnvio["Pendente"] = 0] = "Pendente";
    StatusEnvio[StatusEnvio["Enviado"] = 1] = "Enviado";
    StatusEnvio[StatusEnvio["Entregue"] = 2] = "Entregue";
})(StatusEnvio || (StatusEnvio = {}));
function processarPacote(dados) {
    var tags = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tags[_i - 1] = arguments[_i];
    }
    var id = dados[0], status = dados[1], nome = dados[2];
    var statusTexto = StatusEnvio[status];
    var tagsFormatadas = tags.length > 0 ? tags.join(", ") : "Nenhuma";
    return "\uD83D\uDCE6 Pacote ".concat(id, " para ").concat(nome, "\n    Status: ").concat(statusTexto, "\n    Etiquetas: ").concat(tagsFormatadas);
}
var entradaLegacy = ["AB-900", 1, "Emanuel Nogueira"];
var pacoteConvertido = entradaLegacy;
console.log(processarPacote(pacoteConvertido, "⚠️ Frágil", "⚡ Expresso"));
// Saída esperada:
// 📦 Pacote AB-900 para Emanuel Nogueira
// Status: Enviado
// Etiquetas: ⚠️ Frágil, ⚡ Expresso
