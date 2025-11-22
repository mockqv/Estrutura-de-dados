// Implementação da Tabela Hash com tratamento de colisão por encadeamento
class TabelaHash {
  constructor(tamanho = 50) {
    // Inicializa a tabela com um array de tamanho fixo
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
  }

  // Função hash simples para calcular o índice
  _funcaoHash(chave) {
    let hash = 0;
    // Soma os códigos dos caracteres da chave
    for (let i = 0; i < chave.length; i++) {
      hash += chave.charCodeAt(i);
    }
    // O índice é o resto da divisão pelo tamanho da tabela
    return hash % this.tamanho;
  }

  // Adiciona um par chave-valor ou atualiza o valor se a chave já existir
  adicionar(chave, valor) {
    const indice = this._funcaoHash(chave);

    // Se a posição (balde) estiver vazia, cria uma lista
    if (!this.tabela[indice]) {
      this.tabela[indice] = [];
    }

    // Procura pela chave no balde para o caso de atualização
    for (let i = 0; i < this.tabela[indice].length; i++) {
      // Se a chave já existe, atualiza o valor
      if (this.tabela[indice][i].chave === chave) {
        this.tabela[indice][i].valor = valor;
        console.log(`Chave '${chave}' atualizada.`);
        return;
      }
    }

    // Se a chave não existe no balde, adiciona o novo par
    this.tabela[indice].push({ chave, valor });
    console.log(`Par ('${chave}': ${valor}) adicionado.`);
  }

  // Obtém o valor associado a uma chave
  obter(chave) {
    const indice = this._funcaoHash(chave);

    if (this.tabela[indice]) {
      // Percorre a lista no balde
      for (let i = 0; i < this.tabela[indice].length; i++) {
        if (this.tabela[indice][i].chave === chave) {
          return this.tabela[indice][i].valor;
        }
      }
    }

    // Retorna nulo se a chave não for encontrada
    return null;
  }

  // Remove um par chave-valor
  remover(chave) {
    const indice = this._funcaoHash(chave);

    if (this.tabela[indice]) {
      // Procura pela chave no balde
      for (let i = 0; i < this.tabela[indice].length; i++) {
        if (this.tabela[indice][i].chave === chave) {
          // Remove o elemento da lista
          this.tabela[indice].splice(i, 1);
          console.log(`Chave '${chave}' removida.`);
          return true;
        }
      }
    }

    // Retorna falso se a chave não for encontrada
    console.log(`Chave '${chave}' não encontrada para remoção.`);
    return false;
  }

  // Imprime a estrutura da tabela hash
  imprimirTabela() {
    console.log("\n----- Estrutura da Tabela Hash -----");
    for (let i = 0; i < this.tabela.length; i++) {
      if (this.tabela[i] && this.tabela[i].length > 0) {
        const pares = this.tabela[i].map(par => `[${par.chave}: ${par.valor}]`).join(' -> ');
        console.log(`Índice ${i}: ${pares}`);
      } else {
        console.log(`Índice ${i}: (vazio)`);
      }
    }
  }
}

// Exporta a classe para ser usada em outros arquivos
module.exports = TabelaHash;
