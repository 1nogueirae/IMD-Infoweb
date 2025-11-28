---
titulo: Evoluindo seu TypeScript (Tuplas, Enums, Rest & Union)
tags: [imd, typescript, features, tipos-avancados]
dificuldade: ⭐⭐⭐☆☆
tipo: Mini-Projeto
---

# ⚡ Cheat Sheet: Recursos Avançados de TypeScript

> **Resumo Executivo:** Ferramentas para tornar a tipagem mais expressiva e lidar com dados dinâmicos de forma segura, evitando o `any`.

## Sintaxe Essencial

| Conceito | Sintaxe (TS) | O que faz? | Contexto de Uso |
| :--- | :--- | :--- | :--- |
| **Rest Params** | `fn(...n: number[])` | Aceita zero ou infinitos argumentos como um array. | Funções matemáticas (`sum(1,2,3)`) ou loggers variáveis. |
| **Tupla** | `[string, number]` | Array com tamanho fixo e tipos definidos por posição. | Retorno de funções (ex: React Hooks) ou linhas de CSV. |
| **Enum** | `enum Status { Ativo = 1 }` | Conjunto de constantes nomeadas (Numérico ou Texto). | Status de pedidos, dias da semana, configurações fixas. |
| **Union** | `string \| number` | Permite que uma variável aceite múltiplos tipos específicos. | IDs que podem vir do banco (int) ou uuid (string). |
| **Type Alias** | `type ID = string \| number` | Cria um "apelido" reutilizável para um tipo (primitivo ou obj). | Simplificar assinaturas complexas e evitar repetição. |
| **Type Casting** | `val as string` | Força o compilador a tratar a variável como um tipo específico. | Quando você sabe mais sobre o tipo do que o TS (ex: DOM elements). |

## ⚠️ Gotchas (Erros Comuns)
* **Ordem na Tupla:** `let x: [string, number] = [10, "oi"]` vai dar erro. A ordem importa.
* **Enums Numéricos:** Por padrão começam do 0. Se definir o primeiro como 1, os próximos seguem a sequência (`2, 3...`).
* **Casting Perigoso:** Usar `as` não converte o dado magicamente (ex: `'10' as number` não vira o número 10, continua sendo string no runtime). Para transformar, use `parseInt`.

---

# 🛠️ Mini-Projeto: Processador de Importação de Logística

**Objetivo:** Criar um sistema que processa um "stream" de dados brutos (simulados) vindos de um sistema legado de logística. Você deve tratar entradas variadas e gerar um relatório tipado.

### 📝 O Cenário
Você trabalha no setor de logística. Um sistema antigo envia dados de pacotes misturados. Às vezes o ID do pacote é número, às vezes texto. O status do pacote vem como código numérico (0, 1, 2). Além disso, cada pacote pode ter uma lista indefinida de "tags" (frágil, urgente, etc.).

### 🎯 Requisitos
1.  Crie um **Enum** `StatusEnvio` para mapear: 0 = `Pendente`, 1 = `Enviado`, 2 = `Entregue`.
2.  Crie um **Type Alias** `IDPacote` que aceite `string` ou `number` (Union).
3.  Crie uma **Tupla** `DadosPacote` que represente uma linha de importação: `[IDPacote, StatusEnvio, string]`. (O último string é o nome do recebedor).
4.  Implemente uma função `processarPacote` que:
    * Receba os dados fixos obrigatórios.
    * Use **Rest Parameters** para aceitar quaisquer etiquetas extras (tags) que o pacote tiver.
    * Retorne uma string formatada do relatório.
5.  Use **Type Casting** para simular a conversão de um dado bruto `any` que chega da API.

### 🚀 Mão na Massa (Boilerplate)

```typescript
// 1. Defina o Enum StatusEnvio
// ...

// 2. Defina o Type Alias IDPacote
// ...

// 3. Defina a Tupla DadosPacote
// ...

// 4. Implemente a função usando Rest Parameters para as tags
function processarPacote(dados: DadosPacote, ...tags: string[]): string {
    // Dica: Acesse os dados da tupla por índice: dados[0], dados[1]...
    // Use o Enum para mostrar o nome do status, não o número.
    // Retorne algo como: "Pacote [ID] para [Nome] está [Status]. Tags: [tag1, tag2]"
    return "";
}

// Simulação de uso (Não altere, apenas descomente)
// const entradaLegacy: any = ["12345-BR", 1, "Emanuel Nogueira"];
// const pacoteConvertido = entradaLegacy as DadosPacote;

// console.log(processarPacote(pacoteConvertido, "Frágil", "Prioridade Alta"));
```
🔐 Solução e Análise

<details> <summary><strong>👁️ Ver Gabarito Comentado (Tente resolver antes!)</strong></summary>

```typescript

// 1. Enum para status legíveis
enum StatusEnvio {
    Pendente = 0, // Começa em 0 ou definimos manual
    Enviado = 1,
    Entregue = 2
}

// 2. Union Type para flexibilidade de ID
type IDPacote = string | number;

// 3. Tupla garantindo a estrutura exata da linha de importação
type DadosPacote = [IDPacote, StatusEnvio, string];

// 4. Função com Tupla + Rest Parameters
function processarPacote(dados: DadosPacote, ...tags: string[]): string {
    const [id, status, nome] = dados; // Desestruturação da tupla (moderno)
    
    // Acessando o valor string do Enum usando o índice numérico
    const statusTexto = StatusEnvio[status];
    
    // Tratamento das tags (array)
    const tagsFormatadas = tags.length > 0 ? tags.join(", ") : "Nenhuma";

    return `📦 Pacote ${id} para ${nome}
    Status: ${statusTexto}
    Etiquetas: ${tagsFormatadas}`;
}

// 5. Simulação de uso com Type Casting
// O dado vem 'sujo' como any, nós garantimos ao TS que é uma Tupla válida
const entradaLegacy: any = ["AB-900", 1, "Emanuel Nogueira"]; 
const pacoteConvertido = entradaLegacy as DadosPacote;

// Chamada com argumentos variáveis (Rest)
console.log(processarPacote(pacoteConvertido, "⚠️ Frágil", "⚡ Expresso"));

// Saída esperada:
// 📦 Pacote AB-900 para Emanuel Nogueira
// Status: Enviado
// Etiquetas: ⚠️ Frágil, ⚡ Expresso
```

💡 Por que fizemos assim?

    Tupla vs Interface: Usamos Tupla aqui porque estamos simulando a leitura de um arquivo CSV ou retorno de banco posicional, onde a ordem importa mais que o nome da propriedade.

    Enum Reverso: O TypeScript permite acessar StatusEnvio[1] para pegar a string "Enviado", o que é muito útil para logs.

    Rest: Permite adicionar 0, 1 ou 50 tags sem mudar a assinatura da função.

</details>