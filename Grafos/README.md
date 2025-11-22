# Grafos

Um **Grafo** é uma estrutura de dados não-linear que consiste em um conjunto de **vértices** (ou nós) e um conjunto de **arestas** (ou arcos) que conectam pares de vértices.

Grafos são usados para modelar relações complexas entre objetos. Por exemplo:
- **Redes Sociais**: Vértices são pessoas, arestas são amizades.
- **Mapas**: Vértices são cidades, arestas são estradas.
- **Internet**: Vértices são páginas da web, arestas são links.

## Tipos de Grafos
- **Grafo Direcionado**: As arestas têm uma direção (A -> B é diferente de B -> A).
- **Grafo Não-Direcionado**: As arestas são simétricas (A - B é o mesmo que B - A).
- **Grafo Ponderado**: Cada aresta tem um "peso" ou "custo" associado.

## Representações
A forma mais comum de representar um grafo em código é através de uma **Lista de Adjacência**, onde para cada vértice, armazenamos uma lista de todos os vértices aos quais ele está conectado.
