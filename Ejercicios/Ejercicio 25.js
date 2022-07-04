//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const EliminarDuplicados=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No introduciste nada")

    if(!(arr instanceof Array)) return console.error(`El valor ${arr} no es un arreglo`)

    if(arr.length===0) return console.warn("No se admiten arreglos vacios")

    return console.log(`El arreglo original es ${arr} y sin duplicados es ${[...new Set(arr)]}`)
}

EliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])