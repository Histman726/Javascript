//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial=(num=undefined)=>{
    if(num===undefined) return console.warn("No introduciste valor valido")

    if(num<=0) return console.warn("Introduciste un valor menor o igual a 0")
    
    let res=1
    for(let i=1;i<=Math.abs(num);i++) res=res*i

    return console.log(`El factorial de ${num} es ${res}`)
}

factorial(5)