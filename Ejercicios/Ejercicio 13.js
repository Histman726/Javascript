//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const ParOImpar=(num=undefined)=>{
    if(typeof num!=="number") return console.warn("El valor introducido no es un numero")

    if(Math.sign(num)===-1) return console.warn("Los numeros negativos no pueden ser pares o impares")

    if(num % 2===0) return console.log(`El numero ${num} es par`)

    return console.log(`El numero ${num} es impar`)
}

ParOImpar(12)