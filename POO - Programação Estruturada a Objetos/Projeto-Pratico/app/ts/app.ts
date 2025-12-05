import { Livro } from "./models/livro.js";

let livro = new Livro("1984", "George Orwell", "Secker & Warburg", 1949);

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Editora: ${livro.editora}`);
console.log(`Ano: ${livro.ano}`);
