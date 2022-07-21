//Generators
/*
Es una forma mas amigable de trabajar con los iterables y iterators
 */

function* iterable(){
    yield "hola"
    console.log("Hola de la consola")
    yield "Hola 2"
    console.log("Seguimos con mas instrucciones de codigo")
    yield "Hola 3"
    yield "Hola 4"
}

let  iterador=iterable()
//console.log(iterador.next())
//console.log(iterador.next())

for (let yiel of iterador) {
    console.log(yiel)
}

const arr=[...iterable()]
console.log(arr)

function cuadrado(valor){
    setTimeout(()=>{
       return console.log({valor,resultado:valor*valor})
    },Math.random()*1000)
}

function* generador(){
    console.log("Inicia generador")
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log("Finaliza generador")
}

let gen=generador()

for (let genElement of gen) {
    console.log(genElement)
}