//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const OrdenarArreglo=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No introduciste nada")

    if(!(arr instanceof Array)) return console.error(`El valor ${arr} no es un arreglo`)

    if(arr.length===0) return console.warn("No se admiten arreglos vacios")

    for (const n of arr) {
        if(typeof n!=="number") return console.error(`El valor ${n} no es un numero`)
    }

    return console.info({
        arr,
        asc:arr.map(el=>el).sort(),
        desc:arr.map(el=>el).sort().reverse()
    })
}

OrdenarArreglo([7, 5,7,8,6])