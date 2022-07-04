//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarArreglos=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No introduciste nada")

    if(!(arr instanceof Array)) return console.error(`El valor ${arr} no es un arreglo`)

    if(arr.length===0) return console.warn("No se admiten arreglos vacios")

    if(arr.length===1) return console.warn("El arreglo al menos debe tener 2 elementos")

    return console.info({
        original:arr,
        sinDuplicados:arr.filter((value,index,self)=>self.indexOf(value)===index)
    })
}
quitarArreglos(["x", 10, "x", 2, "10", 10, true, true])