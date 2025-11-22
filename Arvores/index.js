// Importa a classe ArvoreBuscaBinaria
const ArvoreBuscaBinaria = require('./arvoreBuscaBinaria');

// Cria uma nova instância da Árvore
const arvore = new ArvoreBuscaBinaria();

console.log("----- Iniciando Árvore de Busca Binária -----");

console.log("\n----- Inserindo Valores -----");
// Insere valores na árvore. Note que a ordem de inserção importa.
arvore.inserir(15);
arvore.inserir(10);
arvore.inserir(25);
arvore.inserir(7);
arvore.inserir(13);
arvore.inserir(22);
arvore.inserir(27);

console.log("\n----- Imprimindo a Árvore em Ordem -----");
// A impressão em ordem resulta nos valores ordenados de forma crescente
arvore.imprimirEmOrdem();


console.log("\n----- Buscando Valores -----");

const encontrado = arvore.buscar(22);
if (encontrado) {
    console.log(`Valor ${encontrado.valor} encontrado na árvore.`);
} else {
    console.log("Valor não encontrado.");
}

const naoEncontrado = arvore.buscar(100);
if (naoEncontrado) {
    console.log(`Valor ${naoEncontrado.valor} encontrado na árvore.`);
} else {
    console.log("Valor 100 não encontrado na árvore.");
}


console.log("\n----- Fim da Demonstração -----");

