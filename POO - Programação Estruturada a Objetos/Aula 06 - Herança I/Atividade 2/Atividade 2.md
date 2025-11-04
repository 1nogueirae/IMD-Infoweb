# Atividade 02

## Enunciado:

Crie uma hierarquia de classes usando herança baseada no seguinte contexto:

Implemente uma **classe base `Veiculo`** com os seguintes requisitos:

- **Atributos protegidos:**
  - `marca` (string)
  - `modelo` (string)
  - `ano` (number)
  - `velocidadeAtual` (number - privado)

- **Métodos públicos:**
  - Um construtor que recebe marca, modelo e ano (velocidadeAtual inicia em 0)
  - `acelerar(incremento: number): void` - aumenta a velocidade
  - `frear(decremento: number): void` - diminui a velocidade (não pode ser negativa)
  - `getVelocidadeAtual(): number` - retorna a velocidade atual
  - `exibirInfo(): void` - exibe informações básicas do veículo

Crie **três classes derivadas:**

1. **`Carro`** (herda de Veiculo)
   - Atributo adicional: `numeroPortas` (number)
   - Método adicional: `abrirPortaMalas(): void`

2. **`Moto`** (herda de Veiculo)
   - Atributo adicional: `cilindradas` (number)
   - Método adicional: `empinar(): void`

3. **`Caminhao`** (herda de Veiculo)
   - Atributos adicionais: `capacidadeCarga` (number) e `cargaAtual` (number - privado)
   - Métodos adicionais: `carregar(peso: number): void` e `descarregar(peso: number): void`
   - Sobrescreva o método `acelerar()` para limitar a velocidade máxima a 100 km/h

**Requisitos adicionais:**
- Todas as classes derivadas devem sobrescrever o método `exibirInfo()` para incluir suas informações específicas, mas também devem chamar o método da classe base
- Crie uma classe `App` com o método `main()` que instancia objetos de cada tipo e demonstra o uso dos métodos

---

## Resolução:

A resolução da atividade está na pasta `app/ts`, dentro dos arquivos `veiculo.ts`, `carro.ts`, `moto.ts`, `caminhao.ts` e `app.ts`.
