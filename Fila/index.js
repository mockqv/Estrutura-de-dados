
import { addItemQueue, createQueue, removeItemQueue } from "./function.js";

let novaFila = createQueue(3)

addItemQueue(novaFila, "item 1")
addItemQueue(novaFila, "item 2")
addItemQueue(novaFila, "item 3")
removeItemQueue(novaFila)

console.log("-------------------------")
console.log(novaFila)
