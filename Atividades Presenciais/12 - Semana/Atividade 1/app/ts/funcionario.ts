export class Funcionario {

    constructor(
        public id: number,
        public nome: string,
        public matricula?: number,
        public funcao?: string
    ) {
        if (id === undefined) {
            let dataAtual = new Date();
            let numAleatorio = Math.floor(Math.random() * 900) + 100;
            let somaDataAtual = dataAtual.getDate() + (dataAtual.getMonth() + 1) + Number(dataAtual.getFullYear() % 100);
            this.id = numAleatorio + somaDataAtual;
        }

        if (matricula === undefined) {
            this.matricula = this.id;
        }
    }

    detalhar(): string {
        return `ID: ${this.id}
        Nome: ${this.nome}
        Matrícula: ${this.matricula}
        Função: ${this.funcao}.`;
    }
}