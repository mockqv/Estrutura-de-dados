// Define a classe do Nó, que representa cada elemento da lista
class No {
  constructor(dado) {
    this.dado = dado; // O dado que o nó armazena
    this.proximo = null; // O ponteiro para o próximo nó, inicializado como nulo
  }
}

// Define a classe da Lista Encadeada
class ListaEncadeada {
  constructor() {
    this.cabeca = null; // O início da lista (cabeça), inicializado como nulo
    this.tamanho = 0;    // O tamanho da lista
  }

  // Adiciona um elemento no final da lista
  adicionarNoFinal(dado) {
    const novoNo = new No(dado);
    if (!this.cabeca) {
      // Se a lista estiver vazia, o novo nó se torna a cabeça
      this.cabeca = novoNo;
    } else {
      let noAtual = this.cabeca;
      // Percorre a lista até o último nó
      while (noAtual.proximo) {
        noAtual = noAtual.proximo;
      }
      // Adiciona o novo nó no final
      noAtual.proximo = novoNo;
    }
    this.tamanho++;
    console.log(`Elemento ${dado} adicionado ao final.`);
  }

  // Adiciona um elemento no início da lista
  adicionarNoInicio(dado) {
    const novoNo = new No(dado);
    // O próximo do novo nó aponta para a cabeça atual
    novoNo.proximo = this.cabeca;
    // A cabeça da lista se torna o novo nó
    this.cabeca = novoNo;
    this.tamanho++;
    console.log(`Elemento ${dado} adicionado ao início.`);
  }

  // Remove um elemento da lista
  remover(dado) {
    if (!this.cabeca) {
      console.log("A lista está vazia.");
      return;
    }

    // Se o nó a ser removido for a cabeça
    if (this.cabeca.dado === dado) {
      this.cabeca = this.cabeca.proximo;
      this.tamanho--;
      console.log(`Elemento ${dado} removido.`);
      return;
    }

    let noAtual = this.cabeca;
    // Percorre a lista para encontrar o nó ANTERIOR ao que será removido
    while (noAtual.proximo && noAtual.proximo.dado !== dado) {
      noAtual = noAtual.proximo;
    }

    if (noAtual.proximo) {
      // Pula o nó a ser removido, ligando o anterior ao próximo do removido
      noAtual.proximo = noAtual.proximo.proximo;
      this.tamanho--;
      console.log(`Elemento ${dado} removido.`);
    } else {
      console.log(`Elemento ${dado} não encontrado.`);
    }
  }

  // Procura por um elemento na lista
  buscar(dado) {
    if (!this.cabeca) {
      return null;
    }

    let noAtual = this.cabeca;
    while (noAtual) {
      if (noAtual.dado === dado) {
        return noAtual;
      }
      noAtual = noAtual.proximo;
    }

    return null;
  }

  // Exibe todos os elementos da lista
  imprimir() {
    if (!this.cabeca) {
      console.log("A lista está vazia.");
      return;
    }

    let noAtual = this.cabeca;
    let resultado = "cabeça -> ";
    while (noAtual) {
      resultado += `${noAtual.dado} -> `;
      noAtual = noAtual.proximo;
    }
    resultado += "nulo";
    console.log(resultado);
  }

  // Retorna o tamanho da lista
  obterTamanho() {
    return this.tamanho;
  }
}

// Exporta a classe para ser usada em outros arquivos
module.exports = ListaEncadeada;
