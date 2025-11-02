import { Funcionario } from './funcionario';
import { Produto } from './produto';

let produto1 = new Produto(1, "Notebook", 1500.00, 10);

let funcionario1 = new Funcionario(101, "Ana Silva", 5001, "Desenvolvedora");
let funcionario2 = new Funcionario(102, "Carlos Souza");

console.log(produto1.detalhar());
console.log(funcionario1.detalhar());
console.log(funcionario2.detalhar());