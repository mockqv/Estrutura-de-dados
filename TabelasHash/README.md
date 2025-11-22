# Tabela Hash (Hash Table)

Uma **Tabela Hash**, também conhecida como Dicionário ou Mapa, é uma estrutura de dados que associa **chaves** a **valores**. Seu grande diferencial é a velocidade: as operações de inserção, remoção e busca de um elemento são, em média, extremamente rápidas, com complexidade de tempo O(1) (constante).

## Como Funciona?

1.  **Função Hash**: A estrutura utiliza uma "função de dispersão" (ou função hash) para converter uma chave em um índice numérico. É esse índice que define onde o valor correspondente será armazenado em um array interno (chamado de *buckets* ou "baldes").

2.  **Armazenamento**: O par (chave, valor) é guardado na posição do array calculada pela função hash.

## Tratamento de Colisões

Uma **colisão** acontece quando a função hash gera o mesmo índice para duas chaves diferentes. Existem várias formas de lidar com isso. Uma das mais comuns é o **Encadeamento Separado** (*Separate Chaining*):
- Cada posição do array interno, em vez de guardar um único valor, armazena uma outra estrutura de dados (como uma lista encadeada).
- Quando ocorre uma colisão, o novo par (chave, valor) é simplesmente adicionado a essa lista.
