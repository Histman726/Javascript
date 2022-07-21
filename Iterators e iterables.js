//Elementos iterables
/*
-Cadenas de texto
-Arreglos
-Sets
-Maps
 */


const iterable=new Map([["Nombre","John"],["Apellido","Mircha"]])
//Accedemos al iteratos del elemento ierable
const iterador=iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)

let next=iterador.next()

while (!next.done){
    console.log(next.value)
    next=iterador.next()
}
