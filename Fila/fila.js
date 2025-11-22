// Define a classe da Fila (Queue)
class Fila {
  constructor() {
    this.itens = {};   // Objeto para armazenar os elementos de forma eficiente
    this.inicio = 0;   // Ponteiro para o início da fila
    this.fim = 0;      // Ponteiro para o fim da fila
  }

  // Adiciona um item ao final da fila (enqueue)
  enfileirar(item) {
    this.itens[this.fim] = item;
    this.fim++;
    console.log(`Item "${item}" foi enfileirado.`);
  }

  // Remove e retorna o item do início da fila (dequeue)
  desenfileirar() {
    if (this.estaVazia()) {
      console.error("Não foi possível desenfileirar: a fila está vazia.");
      return null;
    }
    
    const itemRemovido = this.itens[this.inicio];
    delete this.itens[this.inicio]; // Libera a memória
    this.inicio++;
    
    console.log(`Item "${itemRemovido}" foi desenfileirado.`);
    return itemRemovido;
  }

  // Retorna o item do início da fila sem removê-lo (peek)
  espiar() {
    if (this.estaVazia()) {
      console.log("A fila está vazia, não há elementos para espiar.");
      return null;
    }
    const itemDoInicio = this.itens[this.inicio];
    console.log(`Próximo item da fila: "${itemDoInicio}".`);
    return itemDoInicio;
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.fim === this.inicio;
  }

  // Retorna o tamanho da fila
  obterTamanho() {
    return this.fim - this.inicio;
  }

  // Imprime o conteúdo da fila
  imprimir() {
    if (this.estaVazia()) {
      console.log("Fila: [] (vazia)");
      return;
    }
    
    let conteudo = [];
    for (let i = this.inicio; i < this.fim; i++) {
      conteudo.push(this.itens[i]);
    }
    console.log(`Fila: início -> [${conteudo.join(', ')}] <- fim`);
  }
}

// Exporta a classe para ser usada em outros arquivos com CommonJS
module.exports = Fila;