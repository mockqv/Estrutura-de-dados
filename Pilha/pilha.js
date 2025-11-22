// Define a classe da Pilha (Stack)
class Pilha {
  constructor(capacidade = 10) {
    this.itens = [];         // Array para armazenar os elementos da pilha
    this.capacidade = capacidade; // A capacidade máxima da pilha
    this.topo = -1;          // Ponteiro para o topo da pilha, -1 significa vazia
  }

  // Adiciona um item ao topo da pilha (push)
  empilhar(item) {
    if (this.estaCheia()) {
      console.error("Não foi possível empilhar: a pilha está cheia.");
      return;
    }
    this.topo++;
    this.itens[this.topo] = item;
    console.log(`Item "${item}" foi empilhado.`);
  }

  // Remove e retorna o item do topo da pilha (pop)
  desempilhar() {
    if (this.estaVazia()) {
      console.error("Não foi possível desempilhar: a pilha está vazia.");
      return null;
    }
    const itemRemovido = this.itens[this.topo];
    this.itens.length = this.topo; // Efetivamente remove o elemento
    this.topo--;
    console.log(`Item "${itemRemovido}" foi desempilhado.`);
    return itemRemovido;
  }

  // Retorna o item do topo da pilha sem removê-lo (peek)
  espiar() {
    if (this.estaVazia()) {
      console.log("A pilha está vazia, não há elementos para espiar.");
      return null;
    }
    const itemDoTopo = this.itens[this.topo];
    console.log(`Elemento do topo da pilha: "${itemDoTopo}".`);
    return itemDoTopo;
  }

  // Verifica se a pilha está vazia
  estaVazia() {
    return this.topo === -1;
  }

  // Verifica se a pilha está cheia
  estaCheia() {
    return this.topo === this.capacidade - 1;
  }

  // Imprime o conteúdo da pilha
  imprimir() {
    if (this.estaVazia()) {
      console.log("Pilha: [] (vazia)");
      return;
    }
    let conteudo = [];
    for (let i = 0; i <= this.topo; i++) {
      conteudo.push(this.itens[i]);
    }
    console.log(`Pilha: [${conteudo.join(', ')}] <- topo`);
  }
}

// Exporta a classe para ser usada em outros arquivos com CommonJS
module.exports = Pilha;