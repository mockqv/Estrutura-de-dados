# Árvores

Uma **árvore** é uma estrutura de dados hierárquica que consiste em **nós** conectados por **arestas**. Diferente das listas, que são lineares, as árvores representam relações de parentesco, como uma árvore genealógica ou um sistema de arquivos.

## Componentes
- **Nó Raiz (Root)**: O nó do topo da árvore, que não tem pai.
- **Nó Pai (Parent)**: Um nó que tem um ou mais nós abaixo dele.
- **Nó Filho (Child)**: Um nó que está diretamente abaixo de outro.
- **Folha (Leaf)**: Um nó que não tem filhos.

## Árvore de Busca Binária (Binary Search Tree - BST)

É uma variação comum onde cada nó tem no máximo dois filhos: um à **esquerda** e um à **direita**.

Ela segue uma regra específica:
- Para qualquer nó, todos os valores na sua sub-árvore esquerda são **menores** que o valor do nó.
- Todos os valores na sua sub-árvore direita são **maiores** que o valor do nó.

Essa organização permite realizar operações como busca, inserção e remoção de forma muito eficiente.
