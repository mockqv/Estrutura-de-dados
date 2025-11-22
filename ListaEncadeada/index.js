// Importa a classe LinkedList do arquivo de implementação
const LinkedList = require('./listaEncadeada');

// Cria uma nova instância da Lista Encadeada
const lista = new LinkedList();

console.log("----- Iniciando Lista Encadeada -----");

// Mostra a lista (deve estar vazia)
lista.printList();
console.log(`Tamanho atual: ${lista.getSize()}`);

console.log("\n----- Adicionando Elementos -----");

// Adiciona elementos
lista.append(10);
lista.append(20);
lista.append(30);
lista.prepend(5);

// Mostra a lista novamente
lista.printList();
console.log(`Tamanho atual: ${lista.getSize()}`);


console.log("\n----- Removendo Elementos -----");

// Remove um elemento do meio, do início e um que não existe
lista.delete(20);
lista.printList();

lista.delete(5);
lista.printList();

lista.delete(99); // Tentativa de remover elemento inexistente
lista.printList();
console.log(`Tamanho atual: ${lista.getSize()}`);


console.log("\n----- Procurando Elementos -----");

const encontrado = lista.find(30);
const naoEncontrado = lista.find(100);

if (encontrado) {
    console.log(`Elemento ${encontrado.data} foi encontrado.`);
}

if (!naoEncontrado) {
    console.log(`Elemento 100 não foi encontrado.`);
}

console.log("\n----- Fim da Demonstração -----");
