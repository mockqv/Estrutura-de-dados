// Define a classe do Nó, que representa cada elemento da lista
class Node {
  constructor(data) {
    this.data = data; // O dado que o nó armazena
    this.next = null; // O ponteiro para o próximo nó, inicializado como nulo
  }
}

// Define a classe da Lista Encadeada
class LinkedList {
  constructor() {
    this.head = null; // O início da lista (cabeça), inicializado como nulo
    this.size = 0;    // O tamanho da lista
  }

  // Adiciona um elemento no final da lista
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // Se a lista estiver vazia, o novo nó se torna a cabeça
      this.head = newNode;
    } else {
      let current = this.head;
      // Percorre a lista até o último nó
      while (current.next) {
        current = current.next;
      }
      // Adiciona o novo nó no final
      current.next = newNode;
    }
    this.size++;
    console.log(`Elemento ${data} adicionado ao final.`);
  }

  // Adiciona um elemento no início da lista
  prepend(data) {
    const newNode = new Node(data);
    // O próximo do novo nó aponta para a cabeça atual
    newNode.next = this.head;
    // A cabeça da lista se torna o novo nó
    this.head = newNode;
    this.size++;
    console.log(`Elemento ${data} adicionado ao início.`);
  }

  // Remove um elemento da lista
  delete(data) {
    if (!this.head) {
      console.log("A lista está vazia.");
      return;
    }

    // Se o nó a ser removido for a cabeça
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      console.log(`Elemento ${data} removido.`);
      return;
    }

    let current = this.head;
    // Percorre a lista para encontrar o nó ANTERIOR ao que será removido
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      // Pula o nó a ser removido, ligando o anterior ao próximo do removido
      current.next = current.next.next;
      this.size--;
      console.log(`Elemento ${data} removido.`);
    } else {
      console.log(`Elemento ${data} não encontrado.`);
    }
  }

  // Procura por um elemento na lista
  find(data) {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Exibe todos os elementos da lista
  printList() {
    if (!this.head) {
      console.log("A lista está vazia.");
      return;
    }

    let current = this.head;
    let result = "head -> ";
    while (current) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // Retorna o tamanho da lista
  getSize() {
    return this.size;
  }
}

// Exporta a classe para ser usada em outros arquivos
module.exports = LinkedList;
