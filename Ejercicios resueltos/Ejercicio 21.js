//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un numero")

    if(arr.legth===0) return console.error("El arreglo esta vacio")

    for (let iterator of arr) {
        if(typeof iterator !=="number") return console.error(`El valor ${iterator} ingresado no es un numero`)
    }

    const newArr=arr.map(el=>el*el)
    return console.info(`Arreglo original: ${arr}.\nArreglo elevado al cuadrado es ${newArr}`)
}

devolverCuadrados([1,4,5])