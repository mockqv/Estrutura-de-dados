// Importa a classe ListaEncadeada do arquivo de implementação
const ListaEncadeada = require('./listaEncadeada');

// Cria uma nova instância da Lista Encadeada
const lista = new ListaEncadeada();

console.log("----- Iniciando Lista Encadeada -----");

// Mostra a lista (deve estar vazia)
lista.imprimir();
console.log(`Tamanho atual: ${lista.obterTamanho()}`);

console.log("\n----- Adicionando Elementos -----");

// Adiciona elementos
lista.adicionarNoFinal(10);
lista.adicionarNoFinal(20);
lista.adicionarNoFinal(30);
lista.adicionarNoInicio(5);

// Mostra a lista novamente
lista.imprimir();
console.log(`Tamanho atual: ${lista.obterTamanho()}`);


console.log("\n----- Removendo Elementos -----");

// Remove um elemento do meio, do início e um que não existe
lista.remover(20);
lista.imprimir();

lista.remover(5);
lista.imprimir();

lista.remover(99); // Tentativa de remover elemento inexistente
lista.imprimir();
console.log(`Tamanho atual: ${lista.obterTamanho()}`);


console.log("\n----- Procurando Elementos -----");

const encontrado = lista.buscar(30);
const naoEncontrado = lista.buscar(100);

if (encontrado) {
    console.log(`Elemento ${encontrado.dado} foi encontrado.`);
}

if (!naoEncontrado) {
    console.log(`Elemento 100 não foi encontrado.`);
}

console.log("\n----- Fim da Demonstração -----");
