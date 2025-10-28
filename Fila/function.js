// Função para criar uma fila com um tamanho específico
export function createQueue(size = 10) {
    // Retorna um array com o tamanho especificado, preenchido com 'undefined'
    return [...new Array(size)];
}

// Função para adicionar um item à fila
export function addItemQueue(queue, item) {
    // Itera sobre a fila para encontrar o primeiro espaço vazio (undefined)
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === undefined) {
            // Adiciona o item no primeiro espaço vazio encontrado
            queue[i] = item;
            console.log(`"[${item}]" foi inserido na fila, na posição -> "[${i}]"`);
            console.log(queue);
            return;
        }
    }
    // Se não houver espaço vazio, exibe uma mensagem de erro
    console.error("Não foi possível adicionar item, a fila está cheia");
}

// Função para remover um item da fila
export function removeItemQueue(queue) {
    // Verifica se a fila não está vazia
    if (queue[0] !== undefined) {
        // Remove o primeiro item da fila
        const removedItem = queue[0];
        // Move todos os itens uma posição para frente
        for (let i = 0; i < queue.length - 1; i++) {
            queue[i] = queue[i + 1];
        }
        // Limpa o último item da fila
        queue[queue.length - 1] = undefined;
        console.log(`Item "[${removedItem}]" removido da fila.`);
        console.log(queue);
        return;
    }
    // Se a fila estiver vazia, exibe uma mensagem de erro
    console.error("A fila está vazia");
}