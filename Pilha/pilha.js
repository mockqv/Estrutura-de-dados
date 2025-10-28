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
            return;
        }
    }
    // Se a pilha estiver vazia, exibe uma mensagem de erro
    console.error("A pilha está vazia");
}

// Função para procurar um item na pilha
export function findItem(pilha, item) {
    // Itera sobre a pilha para encontrar o item
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i] === item) {
            console.log(`Item "${item}" encontrado na posição "${i}" da pilha.`);
            return i;
        }
    }
    // Se o item não for encontrado, exibe uma mensagem de erro
    console.error("Item não foi encontrado");
}

// Função para deletar todos os itens da pilha
export function deleteAllItems(pilha) {
    // Itera sobre a pilha e define todos os itens como undefined
    for (let i = 0; i < pilha.length; i++) {
        pilha[i] = undefined;
    }
    console.log("Todos os itens da pilha foram deletados com sucesso", pilha);
}

// Função para checar se a pilha está vazia
export function isEmpty(pilha) {
    // Itera sobre a pilha para verificar se há algum item
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i] !== undefined) {
            return false;
        }
    }
    return true;
}