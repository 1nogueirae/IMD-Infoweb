enum Prioridade {
    Baixa,
    Media,
    Alta,
    Urgente
}

enum Status {
    Pendente,
    EmAndamento,
    Concluida,
    Cancelada
}

class Tarefa {
    constructor(
        public descricao: string,
        public prioridade: Prioridade,
        public status: Status
    ) { }
}

class Repositorio<T> {
    constructor(private _elementos?: T[]) {
        this.elementos = [];
    }

    public set elementos(v: T[]) {
        this._elementos = v;
    }
    public get elementos(): T[] {
        return this._elementos
    }

    public adicionar(elemento: T): void {
        this.elementos.push(elemento);
    }

    public exibirLista(): void {
        this.elementos.forEach((elemento, index) => {
            console.log(`\n[${index + 1}]`, elemento);
        });
    }
}

const tarefa1 = new Tarefa(
    "Tomar banho",
    Prioridade.Alta,
    Status.EmAndamento
);

const tarefa2 = new Tarefa(
    "Levar o cachorro para passear",
    Prioridade.Media,
    Status.Pendente
);


const LISTA_DE_TAREFAS = new Repositorio<Tarefa>();

LISTA_DE_TAREFAS.adicionar(tarefa1);

LISTA_DE_TAREFAS.adicionar(tarefa2);

LISTA_DE_TAREFAS.exibirLista();
