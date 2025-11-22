// Importa a classe Fila usando require
const Fila = require('./fila.js');

console.log("----- Demonstração da Estrutura de Dados Fila -----");

// Cria uma nova instância da Fila
const minhaFila = new Fila();

console.log("\n----- Enfileirando Itens -----");
minhaFila.imprimir(); // Deve estar vazia
minhaFila.enfileirar("Cliente A");
minhaFila.imprimir();
minhaFila.enfileirar("Cliente B");
minhaFila.imprimir();
minhaFila.enfileirar("Cliente C");
minhaFila.imprimir();

console.log(`\nTamanho atual da fila: ${minhaFila.obterTamanho()}`);

console.log("\n----- Espiando o Próximo -----");
minhaFila.espiar();

console.log("\n----- Desenfileirando Itens -----");
minhaFila.desenfileirar();
minhaFila.imprimir();
minhaFila.desenfileirar();
minhaFila.imprimir();
minhaFila.desenfileirar();
minhaFila.imprimir();
minhaFila.desenfileirar(); // Deve dar erro de fila vazia

console.log(`\nA fila está vazia? ${minhaFila.estaVazia()}`);

console.log("\n----- Fim da Demonstração -----");
