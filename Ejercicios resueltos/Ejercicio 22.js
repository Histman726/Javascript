//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const ArrayMinMax=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un numero")

    if(arr.legth===0) return console.error("El arreglo esta vacio")

    for (let iterator of arr) {
        if(typeof iterator !=="number") return console.error(`El valor ${iterator} ingresado no es un numero`)
    }

    return console.info(`Arreglo original\nValor mayor ${Math.max(...arr)}\nValor menor ${Math.min(...arr)}`)
}
ArrayMinMax([1,2,5])