//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo=(num=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste un numero")

    if(typeof num!=="number") return console.error(`El ${num} es no es un numero`)

    if(num===0) return console.error("El numero no puede ser 0")

    if(Math.sign(num)===-1) return console.error("El numero no puede ser negativo")

    let divisible=false

    for(let i=2;i<num;i++){
        if((num%i)===0) {
            divisible=true
            break
        } 
    }
    return(divisible)
        ? console.log(`El numero ${num} es primo`)
        :console.log(`El numero ${num} no es primo`)
}

numeroPrimo(12)