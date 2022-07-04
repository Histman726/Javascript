//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedioArreglo=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No introduciste nada")

    if(!(arr instanceof Array)) return console.error(`El valor ${arr} no es un arreglo`)

    if(arr.length===0) return console.warn("No se admiten arreglos vacios")

    for (const n of arr) {
        if(typeof n!=="number") return console.error(`El valor ${n} no es un numero`)
    }
    debugger
    let sumaArreglo=arr.reduce((a,b)=>a+b,0),
        promedio=sumaArreglo/arr.length

    return console.log(`El promedio del arreglo ${arr} es ${promedio}`)
}

promedioArreglo([9,8,7,6,5,4,3,2,1,0])