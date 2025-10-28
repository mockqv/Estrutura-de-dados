
import { createPilha, findItem, addItem, deleteAllItems, removeItem } from './pilha.js' // Chamando do outro arquivo

console.log("Meu arquivo index.js") // Print, mostrar dados
const pilha = createPilha(3) // Criando com tamanho X

addItem(pilha, "seu nome")
addItem(pilha, "teste")
addItem(pilha, "item 3")
removeItem(pilha)

console.log(pilha)
