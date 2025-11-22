# Lista Encadeada (Linked List)

Uma **Lista Encadeada** é uma estrutura de dados linear e dinâmica, onde os elementos não são armazenados em locais de memória contíguos. Em vez disso, cada elemento é um objeto separado chamado de **nó** (node).

Cada nó contém duas partes:
1.  **Dado**: O valor do elemento em si.
2.  **Ponteiro (ou Próximo)**: Uma referência que aponta para o próximo nó na sequência.

O último nó da lista aponta para `null`, indicando o fim da lista. O ponto de entrada para a lista é um ponteiro chamado `head`, que aponta para o primeiro nó.

## Vantagens
- **Tamanho Dinâmico**: A lista pode crescer e diminuir durante a execução.
- **Inserção/Deleção Eficiente**: Adicionar ou remover nós no início ou no meio da lista é mais eficiente do que em um array, pois não requer a reorganização de todos os outros elementos.

## Desvantagens
- **Acesso Lento**: Para acessar um elemento, é preciso percorrer a lista desde o início (`head`), resultando em um tempo de acesso linear O(n).
- **Mais Memória**: Requer memória adicional para armazenar os ponteiros de referência.
