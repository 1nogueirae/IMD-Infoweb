## 🚀 Resumo Dinâmico: Generics e Decorators (TypeScript)

### 1\. Generics: Componentes Reutilizáveis e Flexíveis

**Conceito-Chave:** Generics (Genéricos) são a principal ferramenta para construir componentes que não apenas são bem definidos, mas também **reutilizáveis**, permitindo que trabalhem com *qualquer tipo de dado* sem perder a verificação de tipo do compilador (Type Checking).

| Abordagem Problemática | O Problema | Solução com Generics |
| :--- | :--- | :--- |
| `function info(arg: number): number` | Restringe a função a apenas um tipo (`number`), perdendo a reutilização. | Usa uma **variável de tipo** (`<T>`) para que o tipo de entrada seja o mesmo do tipo de retorno, garantindo a flexibilidade e o *type checking*. |
| `function info2(arg: any): any` | Resolve a flexibilidade (`any`), mas perde as verificações de tipo do compilador, pois o retorno é sempre `any`. | O tipo (`T`) é definido na chamada da função, permitindo a reutilização com total segurança de tipos. |

#### 🛠️ Generics em Funções (Exemplo Essencial)

O uso da variável de tipo `<T>` é o coração dos Generics 74].

```typescript
function info3<T>(arg: T): T {
    return arg;
}

// Uso: o tipo T é inferido ou especificado
let i = info3<number>(10); // i é do tipo number
let t = info3<string>('texto'); // t é do tipo string
```

**Restrições (Constraints):** Para garantir que um objeto passado como genérico tenha uma propriedade específica (ex: `nome`), usamos a cláusula `extends` 98, 99].

```typescript
interface temNome {
    nome: string;
}

// A restrição garante que T DEVE ter a propriedade nome: string
function imprimirNome<T extends temNome>(obj: T) { 
    console.log(obj.nome);
}
```

#### 🧩 Generics em Classes e Interfaces

Generics também podem ser usados em interfaces e classes para definir tipos que serão usados dentro delas 50].

  * **Interface Genérica:** O tipo (`T`) é definido na implementação da classe 130].
    ```typescript
    interface GenericTest<T> {
        test(arg: T): T;
    }

    class Teste1 implements GenericTest<number> { // T é number
        test(arg: number): number { return arg; }
    }
    ```
  * **Classe Genérica:** A classe pode usar múltiplos tipos genéricos (`<T, K>`) em atributos e métodos 151, 154].
    ```typescript
    class ListaGenerica<T, K> {
        private _id: K; // O tipo do ID é K
        lista: T[] = []; // O tipo dos itens da lista é T

        constructor(id: K) { this._id = id; }
        adicionar(arg: T) { this.lista.push(arg); }
    }
    // Cria uma lista de number e um ID de string
    let listg = new ListaGenerica<number, string>("xyz");
    ```

-----

### 2\. Decorators: Metaprogramação Simplificada

**Conceito-Chave:** Um Decorator é uma maneira especial de **adicionar funcionalidades** (observar, modificar ou substituir) a classes, métodos, propriedades ou parâmetros, usando a sintaxe `@expression` 32, 186, 187, 192, 194]. Eles são funções que são chamadas em tempo de execução 193].

  * ⚠️ **Pré-requisito:** É preciso habilitar o recurso no `tsconfig.json`: `"experimentalDecorators": true` 195].

| Tipo de Decorator | Uso Típico | Aplicação |
| :--- | :--- | :--- |
| **Classe** | Aplicado ao construtor da classe; pode modificar ou substituir a definição da classe 204, 205, 206]. | `@exemploDecoratorClasse` antes de `class Pessoa{...}` 209]. |
| **Método** | Aplicado ao descritor de propriedade do método; pode observar ou modificar a definição do método 217, 218, 219]. | **Exemplo:** Adicionar *logs* antes e depois da execução do método `sacar` (como no material, p. 16) 295]. |
| **Propriedade** | Aplicado antes da propriedade; usado para interceptar valores atribuídos 223]. | **Exemplo:** Implementar lógica de validação (`@validacao()`) para garantir que o saldo não seja negativo (como no material, p. 17) 324, 346, 347]. |

#### 🏭 Decorator Factory (Modificando o Construtor da Classe)

Um Decorator Factory é uma função que **retorna o Decorator real** 262]. É muito usado para passar parâmetros para o decorator e para modificar o construtor da classe 256, 265].

**Exemplo de Factory (Modificando a Classe):**

```typescript
function dataDecorator(construtor: new (...args: any[]) => {}) {
    // Retorna uma nova classe que estende a original
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('início da execução...');
            console.log(`${new Date().getHours()}: ${new Date().getMinutes()}`);
            super(args); // Chama o construtor original
            console.log('fim da execução...');
        }
    }
}

// O decorator executa a Factory e usa a função retornada para decorar a classe
@dataDecorator 
class Pessoa {}
```

-----