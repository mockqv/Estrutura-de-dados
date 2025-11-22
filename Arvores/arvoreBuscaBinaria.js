// Define a classe do Nó, que representa cada elemento da árvore
class No {
  constructor(valor) {
    this.valor = valor;   // O valor que o nó armazena
    this.esquerda = null; // O filho da esquerda, inicializado como nulo
    this.direita = null;  // O filho da direita, inicializado como nulo
  }
}

// Define a classe da Árvore de Busca Binária
class ArvoreBuscaBinaria {
  constructor() {
    this.raiz = null; // A raiz da árvore, inicializada como nula
  }

  // Método para inserir um novo valor na árvore
  inserir(valor) {
    const novoNo = new No(valor);

    if (this.raiz === null) {
      // Se a árvore estiver vazia, o novo nó se torna a raiz
      this.raiz = novoNo;
    } else {
      // Senão, encontra a posição correta para inserir o nó
      this._inserirNo(this.raiz, novoNo);
    }
    console.log(`Valor ${valor} inserido.`);
  }

  // Método auxiliar recursivo para inserir um nó
  _inserirNo(no, novoNo) {
    if (novoNo.valor < no.valor) {
      // Se o valor for menor, vai para a esquerda
      if (no.esquerda === null) {
        no.esquerda = novoNo;
      } else {
        this._inserirNo(no.esquerda, novoNo);
      }
    } else {
      // Se o valor for maior ou igual, vai para a direita
      if (no.direita === null) {
        no.direita = novoNo;
      } else {
        this._inserirNo(no.direita, novoNo);
      }
    }
  }

  // Método para buscar um valor na árvore
  buscar(valor) {
    return this._buscar(this.raiz, valor);
  }

  // Método auxiliar recursivo para buscar um valor
  _buscar(no, valor) {
    if (no === null) {
      // Se o nó for nulo, o valor não foi encontrado
      return null;
    }

    if (valor < no.valor) {
      // Se o valor for menor, busca na sub-árvore esquerda
      return this._buscar(no.esquerda, valor);
    } else if (valor > no.valor) {
      // Se o valor for maior, busca na sub-árvore direita
      return this._buscar(no.direita, valor);
    } else {
      // Se o valor for igual, encontrou o nó
      return no;
    }
  }

  // Imprime a árvore em ordem (In-order traversal: esquerda, raiz, direita)
  imprimirEmOrdem() {
    const resultado = [];
    this._emOrdem(this.raiz, resultado);
    console.log("Árvore em ordem:", resultado.join(' -> '));
  }

  _emOrdem(no, resultado) {
    if (no !== null) {
      this._emOrdem(no.esquerda, resultado);
      resultado.push(no.valor);
      this._emOrdem(no.direita, resultado);
    }
  }
}

// Exporta a classe para ser usada em outros arquivos
module.exports = ArvoreBuscaBinaria;
