// Importa a classe Pilha usando require
const Pilha = require('./pilha.js');

console.log("----- Demonstração da Estrutura de Dados Pilha -----");

// Cria uma nova instância da Pilha com capacidade 3
const minhaPilha = new Pilha(3);

console.log("\n----- Empilhando Itens -----");
minhaPilha.imprimir(); // Deve estar vazia
minhaPilha.empilhar("Primeiro Item");
minhaPilha.imprimir();
minhaPilha.empilhar("Segundo Item");
minhaPilha.imprimir();
minhaPilha.empilhar("Terceiro Item");
minhaPilha.imprimir();
minhaPilha.empilhar("Item Extra"); // Deve dar erro de pilha cheia

console.log(`\nA pilha está cheia? ${minhaPilha.estaCheia()}`);

console.log("\n----- Espiando o Topo -----");
minhaPilha.espiar();

console.log("\n----- Desempilhando Itens -----");
minhaPilha.desempilhar();
minhaPilha.imprimir();
minhaPilha.desempilhar();
minhaPilha.imprimir();
minhaPilha.desempilhar();
minhaPilha.imprimir();
minhaPilha.desempilhar(); // Deve dar erro de pilha vazia

console.log(`\nA pilha está vazia? ${minhaPilha.estaVazia()}`);

console.log("\n----- Fim da Demonstração -----");
