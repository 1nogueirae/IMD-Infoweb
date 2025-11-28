var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["Baixa"] = 0] = "Baixa";
    Prioridade[Prioridade["Media"] = 1] = "Media";
    Prioridade[Prioridade["Alta"] = 2] = "Alta";
    Prioridade[Prioridade["Urgente"] = 3] = "Urgente";
})(Prioridade || (Prioridade = {}));
var Status;
(function (Status) {
    Status[Status["Pendente"] = 0] = "Pendente";
    Status[Status["EmAndamento"] = 1] = "EmAndamento";
    Status[Status["Concluida"] = 2] = "Concluida";
    Status[Status["Cancelada"] = 3] = "Cancelada";
})(Status || (Status = {}));
var Tarefa = /** @class */ (function () {
    function Tarefa(descricao, prioridade, status) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = status;
    }
    return Tarefa;
}());
var Repositorio = /** @class */ (function () {
    function Repositorio(_elementos) {
        this._elementos = _elementos;
        this.elementos = [];
    }
    Object.defineProperty(Repositorio.prototype, "elementos", {
        get: function () {
            return this._elementos;
        },
        set: function (v) {
            this._elementos = v;
        },
        enumerable: false,
        configurable: true
    });
    Repositorio.prototype.adicionar = function (elemento) {
        this.elementos.push(elemento);
    };
    Repositorio.prototype.exibirLista = function () {
        this.elementos.forEach(function (elemento, index) {
            console.log("\n[".concat(index + 1, "]"), elemento);
        });
    };
    return Repositorio;
}());
var tarefa1 = new Tarefa("Tomar banho", Prioridade.Alta, Status.EmAndamento);
var tarefa2 = new Tarefa("Levar o cachorro para passear", Prioridade.Media, Status.Pendente);
var LISTA_DE_TAREFAS = new Repositorio();
LISTA_DE_TAREFAS.adicionar(tarefa1);
LISTA_DE_TAREFAS.adicionar(tarefa2);
LISTA_DE_TAREFAS.exibirLista();
