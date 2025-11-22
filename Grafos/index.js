// Importa a classe Grafo
const Grafo = require('./grafo');

// Cria uma nova instância do Grafo
const meuGrafo = new Grafo();

console.log("----- Construindo o Grafo -----");

// Adiciona vértices (cidades, por exemplo)
meuGrafo.adicionarVertice('A');
meuGrafo.adicionarVertice('B');
meuGrafo.adicionarVertice('C');
meuGrafo.adicionarVertice('D');
meuGrafo.adicionarVertice('E');
meuGrafo.adicionarVertice('F');

// Adiciona arestas (estradas)
meuGrafo.adicionarAresta('A', 'B');
meuGrafo.adicionarAresta('A', 'C');
meuGrafo.adicionarAresta('B', 'D');
meuGrafo.adicionarAresta('C', 'E');
meuGrafo.adicionarAresta('D', 'E');
meuGrafo.adicionarAresta('D', 'F');
meuGrafo.adicionarAresta('E', 'F');

// Mostra a estrutura final do grafo
meuGrafo.imprimirGrafo();

// Demonstra os algoritmos de busca
meuGrafo.buscaEmLargura('A');
meuGrafo.buscaEmProfundidade('A');

console.log("\n----- Fim da Demonstração -----");
