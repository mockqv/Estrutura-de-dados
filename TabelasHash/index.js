// Importa a classe TabelaHash
const TabelaHash = require('./tabelaHash');

// Cria uma nova instância da Tabela Hash
const minhaTabela = new TabelaHash();

console.log("----- Iniciando Tabela Hash -----");

console.log("\n----- Adicionando Pares Chave-Valor -----");
minhaTabela.adicionar('nome', 'Alice');
minhaTabela.adicionar('idade', 30);
minhaTabela.adicionar('cidade', 'São Paulo');
minhaTabela.adicionar('profissao', 'Engenheira');

// Exemplo de colisão (chaves 'nome' e 'meno' podem colidir dependendo da função hash)
minhaTabela.adicionar('meno', 'Bob'); // 'meno' é um anagrama de 'nome'

console.log("\n----- Obtendo Valores -----");
console.log(`Nome: ${minhaTabela.obter('nome')}`);
console.log(`Idade: ${minhaTabela.obter('idade')}`);
console.log(`País: ${minhaTabela.obter('pais')}`); // Chave inexistente

console.log("\n----- Atualizando um Valor -----");
minhaTabela.adicionar('idade', 31);
console.log(`Nova Idade: ${minhaTabela.obter('idade')}`);

console.log("\n----- Removendo um Valor -----");
minhaTabela.remover('cidade');
minhaTabela.remover('estado'); // Chave inexistente

// Mostra a estrutura final da tabela
minhaTabela.imprimirTabela();

console.log("\n----- Fim da Demonstração -----");
