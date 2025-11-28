enum StatusEnvio {
    Pendente = 0,
    Enviado = 1,
    Entregue = 2
}

type IDPacote = string | number;

type DadosPacote = [IDPacote, StatusEnvio, string];

function processarPacote(dados: DadosPacote, ...tags: string[]): string {
    const [id, status, nome] = dados;
    
    const statusTexto = StatusEnvio[status];
    
    const tagsFormatadas = tags.length > 0 ? tags.join(", ") : "Nenhuma";

    return `📦 Pacote ${id} para ${nome}
    Status: ${statusTexto}
    Etiquetas: ${tagsFormatadas}`;
}

const entradaLegacy: any = ["AB-900", 1, "Emanuel Nogueira"]; 
const pacoteConvertido = entradaLegacy as DadosPacote;

console.log(processarPacote(pacoteConvertido, "⚠️ Frágil", "⚡ Expresso"));

// Saída esperada:
// 📦 Pacote AB-900 para Emanuel Nogueira
// Status: Enviado
// Etiquetas: ⚠️ Frágil, ⚡ Expresso