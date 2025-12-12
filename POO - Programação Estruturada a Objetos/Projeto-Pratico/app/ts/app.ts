// import { Livro } from "./models/livro";
// let livro = new Livro("Meu livro","Emerson", "UFRN",2021);
// console.log(livro);

import { LivroController } from "./controllers/livrocontroller";

let controller = new LivroController();

document.querySelector('.form').addEventListener('submit',controller.cadastrar.bind(controller));
