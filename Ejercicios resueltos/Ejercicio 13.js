//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar=(num=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste un numero")

    if(typeof num!=="number") return console.error(`El ${num} es no es un numero`)

    return((num%2)===0)
        ? console.info(`El numero ${num} es Par`)
        : console.info(`El numero ${num} es Impar`)
}
numeroParImpar(12)