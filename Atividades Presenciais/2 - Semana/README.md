# README

## Atividade: Página HTML sobre Figura Geométrica Plana

Este projeto consiste na criação de um documento HTML explicando uma figura geométrica plana, seguindo os requisitos abaixo:

### Requisitos

1. **Estrutura do Documento**
    - Deve conter pelo menos duas seções distintas.
    - O conteúdo deve ser detalhado em parágrafos explicativos.

2. **Estilo**
    - Definir cor de fundo utilizando CSS.
    - Estilizar os links para cada estado (normal, hover, active, visited).

3. **Imagens**
    - Incluir imagens ilustrativas da figura geométrica com o atributo `alt` definido.

4. **Navegação**
    - Adicionar um link para uma segunda página interna.
    - Adicionar um link para uma página externa, que deve abrir em uma nova aba.

5. **Calculadora de Área**
    - A segunda página interna deve conter uma calculadora que solicita os dados necessários para calcular a área da figura escolhida.
    - Após clicar em “OK”, deve exibir:  
      `A área da figura X é: Y m²`  
      (X = nome da figura, Y = valor calculado).
    - Deve haver um segundo botão para converter o resultado de m² para pés².
    - Toda a lógica de cálculo deve ser implementada em JavaScript.

6. **Organização**
    - O código deve ser bem organizado e adequadamente formatado.

### Sugestão de Estrutura de Arquivos

```
/
├── index.html         # Página principal com explicação da figura
├── calculadora.html   # Página interna com a calculadora de área
├── css/
│   └── style.css      # Arquivo de estilos
├── img/
│   └── figura.png     # Imagem ilustrativa da figura geométrica
└── README.md          # Este arquivo
```

### Observações

- Escolha uma figura geométrica plana (ex: círculo, triângulo, quadrado).
- Certifique-se de que todos os requisitos acima sejam atendidos.
- Utilize comentários no código para facilitar o entendimento.

---

**Exemplo de links:**
- [Calculadora de Área](calculadora.html)
- [Página Externa](https://www.example.com){:target="_blank"}

---

**Boa prática:**  
Mantenha o código limpo, indentado e com nomes de arquivos e variáveis claros.
