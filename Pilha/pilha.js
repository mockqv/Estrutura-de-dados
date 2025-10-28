// Função para criar uma pilha com um tamanho específico
export function createPilha(tamanhoDaPilha = 10) {
    // Retorna um array com o tamanho especificado, preenchido com 'undefined'
    return [...new Array(tamanhoDaPilha)];
}

// Função para adicionar um item à pilha
export function addItem(pilha, item) {
    // Itera sobre a pilha para encontrar o primeiro espaço vazio (undefined)
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i] === undefined) {
            // Adiciona o item no primeiro espaço vazio encontrado
            pilha[i] = item;
            console.log(`"${item}" foi adicionado, na posição "${i}" da pilha`);
            console.log(pilha);
            return;
        }
    }
    // Se não houver espaço vazio, exibe uma mensagem de erro
    console.error("Não foi possível adicionar item, a pilha está cheia");
}

// Função para remover um item da pilha
export function removeItem(pilha) {
    // Itera sobre a pilha de trás para frente para encontrar o último item adicionado
    for (let i = pilha.length - 1; i >= 0; i--) {
        if (pilha[i] !== undefined) {
            // Remove o último item encontrado
            const removedItem = pilha[i];
            pilha[i] = undefined;
            console.log(`Item "${removedItem}" removido da pilha.`);
            console.log(pilha);
            return removeItem;
        }
    }
    // Se a pilha estiver vazia, exibe uma mensagem de erro
    console.error("A pilha está vazia");
}

// Função para espiar o topo da pilha, sem removê-lo
export function peek(pilha) {
    // Itera sobre a pilha de trás para frente para encontrar o último item adicionado
    for (let i = pilha.length - 1; i >= 0; i--) {
        if (pilha[i] !== undefined) {
            console.log(`Elemento do topo da pilha: "${pilha[i]}".`);
            return pilha[i];
        }
    }
    // Se a pilha estiver vazia, exibe uma mensagem de erro
    console.error("A pilha está vazia, não há elementos para espiar.");
    return undefined;
}

// Função para checar se a pilha está vazia
export function isEmpty(pilha) {
    // Itera sobre a pilha para verificar se há algum item
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i] !== undefined) {
            return false;
        }
    }
    return undefined;
}

// Função para verificar se a pilha está cheia
export function isFull(pilha) {
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i] === undefined) {
            return false;
        }
    }
    console.log("A pilha está cheia.");
    return true;
}