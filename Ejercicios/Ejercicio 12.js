//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const Primo=(num=undefined)=>{
    if(typeof num!=="number") return console.warn("El valor introducido no es un numero")

    if(num===1 || num===0) return console.warn("El cero o uno no son numeros primos")

    let contador=0;
    for (let i = 1; i <= num; i++) {
        if(num % i===0) contador++
        
        if(contador>2) break;
    }

    if(contador===2) return console.log(`El numero ${num} es primo`)

    return console.log(`El numero ${num} no es primo`)
}

Primo(12)