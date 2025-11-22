# Estruturas de Dados em JavaScript

Este repositório contém implementações de diversas estruturas de dados fundamentais utilizando JavaScript. O objetivo é fornecer exemplos claros, idiomáticos e padronizados em português.

Cada estrutura é implementada como uma classe e está contida em seu próprio diretório, com uma implementação limpa e um arquivo de exemplo.

## Estruturas Implementadas

-   **[Pilha](./Pilha/)**: Estrutura que segue o princípio LIFO (Last-In, First-Out), ou "o último a entrar é o primeiro a sair".
-   **[Fila](./Fila/)**: Estrutura que segue o princípio FIFO (First-In, First-Out), ou "o primeiro a entrar é o primeiro a sair".
-   **[Lista Encadeada](./ListaEncadeada/)**: Coleção linear e dinâmica de nós, onde cada nó aponta para o próximo.
-   **[Árvore de Busca Binária](./Arvores/)**: Estrutura de árvore hierárquica que permite buscas, inserções e remoções eficientes.
-   **[Grafo](./Grafos/)**: Conjunto de vértices e arestas, ideal para modelar redes e conexões. A implementação utiliza uma lista de adjacência.
-   **[Tabela Hash](./TabelasHash/)**: Estrutura que mapeia chaves a valores para buscas extremamente rápidas, com tratamento de colisões.

## Padrão do Projeto

-   **Linguagem**: Todo o código, comentários e documentação estão em **português**.
-   **Implementação**: As estruturas são implementadas usando **Classes** do ES6.
-   **Módulos**: O projeto utiliza **CommonJS** (`require`/`module.exports`) para consistência.
-   **Estrutura**: Cada diretório é um módulo autocontido com:
    -   `index.js`: Demonstração de uso da estrutura.
    -   `[estrutura].js`: A implementação da classe da estrutura.
    -   `package.json`: Com um script `start` para rodar a demonstração.
    -   `README.md`: Explicação teórica sobre a estrutura.

## Como Usar

Para executar a demonstração de qualquer uma das estruturas, navegue até o diretório desejado e execute o script `start`.

Por exemplo, para testar a **Pilha**:

```bash
cd Pilha
npm start
```

Para testar a **Árvore**:

```bash
cd Arvores
npm start
```