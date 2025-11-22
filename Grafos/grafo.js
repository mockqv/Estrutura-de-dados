// Implementa um Grafo usando uma Lista de Adjacência
class Grafo {
  constructor() {
    // A lista de adjacência é um Map onde a chave é o vértice
    // e o valor é uma lista de seus vizinhos.
    this.listaDeAdjacencia = new Map();
  }

  // Adiciona um novo vértice (nó) ao grafo
  adicionarVertice(vertice) {
    if (!this.listaDeAdjacencia.has(vertice)) {
      this.listaDeAdjacencia.set(vertice, []);
      console.log(`Vértice ${vertice} adicionado.`);
    } else {
      console.log(`Vértice ${vertice} já existe.`);
    }
  }

  // Adiciona uma aresta (conexão) entre dois vértices
  adicionarAresta(vertice1, vertice2) {
    if (this.listaDeAdjacencia.has(vertice1) && this.listaDeAdjacencia.has(vertice2)) {
      // Grafo não-direcionado, então a conexão é mútua
      this.listaDeAdjacencia.get(vertice1).push(vertice2);
      this.listaDeAdjacencia.get(vertice2).push(vertice1);
      console.log(`Aresta entre ${vertice1} e ${vertice2} adicionada.`);
    } else {
      console.log("Um ou ambos os vértices não existem.");
    }
  }

  // Imprime a representação do grafo
  imprimirGrafo() {
    console.log("\n----- Representação do Grafo (Lista de Adjacência) -----");
    for (let [vertice, vizinhos] of this.listaDeAdjacencia) {
      console.log(`${vertice} -> ${vizinhos.join(', ')}`);
    }
  }

  // Busca em Largura (Breadth-First Search - BFS)
  buscaEmLargura(verticeInicial) {
    console.log(`\nIniciando Busca em Largura a partir de ${verticeInicial}:`);
    const visitados = new Set();
    const fila = [verticeInicial];
    visitados.add(verticeInicial);

    while (fila.length > 0) {
      const verticeAtual = fila.shift(); // Pega o primeiro da fila
      console.log(`Visitando: ${verticeAtual}`);

      const vizinhos = this.listaDeAdjacencia.get(verticeAtual);

      for (const vizinho of vizinhos) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push(vizinho);
        }
      }
    }
  }

  // Busca em Profundidade (Depth-First Search - DFS)
  buscaEmProfundidade(verticeInicial) {
    console.log(`\nIniciando Busca em Profundidade a partir de ${verticeInicial}:`);
    const visitados = new Set();
    this._dfsRecursivo(verticeInicial, visitados);
  }

  _dfsRecursivo(vertice, visitados) {
    visitados.add(vertice);
    console.log(`Visitando: ${vertice}`);

    const vizinhos = this.listaDeAdjacencia.get(vertice);

    for (const vizinho of vizinhos) {
      if (!visitados.has(vizinho)) {
        this._dfsRecursivo(vizinho, visitados);
      }
    }
  }
}

// Exporta a classe para ser usada em outros arquivos
module.exports = Grafo;
