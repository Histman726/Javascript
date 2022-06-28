//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial=(numero=undefined)=>{
    if(numero===undefined) return console.warn("No ingresaste un numero")

    if(typeof numero!=="number") return console.error(`El valor ${numero} no es un numero`)

    if(numero===0) return console.error("El numero no puede ser 0")

    if(Math.sign(numero)===-1) return console.error("El numero no puede ser negativo")

    let factorial=1

    for(let i=factorial;i>1;i--){
        factorial*=i
    }
    return console.log(`El factorial del numero ${numero} es ${factorial}`)
}