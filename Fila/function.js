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

// Função para retornar o primeiro elemento da fila, sem removê-lo
export function peek(queue) {
    if (queue[0] !== undefined) {
        console.log(`Primeiro elemento da fila: "${queue[0]}".`);
        return queue[0];
    }
    console.error("A fila está vazia, não há elementos para espiar.");
    return undefined;
}

// Função para verificar se a fila está vazia
export function isEmpty(queue) {
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] !== undefined) {
            return false;
        }
    }
    console.log("A fila está vazia.");
    return true;
}

// Função para verificar se a fila está cheia
export function isFull(queue) {
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === undefined) {
            return false;
        }
    }
    return true;
}